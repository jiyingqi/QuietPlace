import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Alert, ScrollView } from 'react-native';
import Slider from '@react-native-community/slider';
import  Styles  from './styles/styles';
import firebase from 'react-native-firebase';
import Spinner from 'react-native-loading-spinner-overlay';
import onfirmAlert from 'react-confirm-alert'

export default class DisplayGroup extends Component {
    static navigationOptions = {
      title: 'DisplayGroup',
    };

    constructor(props){
      super(props)
      this.state = {
        currentUser: null,
        currentGroup: '',
        indicator: false,
        value: 0,
        volumeRef: null,
        membersList: [],
      };
    }

    leaveGroupButtonPressed = () => {
      const { currentGroup } = this.state
      const { currentUser } = firebase.auth()
      this.setState({indicator : true})
      this.leaveGroup(currentUser, currentGroup)
    }

    leaveGroup = (user, group) =>{
      const groupRef = firebase.database().ref('Group').child(group)
      groupRef.orderByChild('thresholdVolume').once('value', snapshot => {
        if (snapshot.exists()) {
          this.removeUserFromGroup(user, groupRef)
                    this.updateUserInfoWithGroupID(user, groupRef)
          this.setState({indicator : false})
                    this.props.navigation.navigate('MainNavigator')
        }
        else {
          Alert.alert('Group not found.')
          this.setState({indicator : false})
        }
      })
    }


    removeUserFromGroup = (user, groupRef) => {
      const userRef = groupRef.child('Members').child(user.uid)
      userRef.remove();
      const inGroup = groupRef.child('Members').orderByChild(user.uid).once('value', snapshot => {
        if(snapshot.exists()){
          return;
        }
        else{
          groupRef.remove();
        }
      })
  }

    updateUserInfoWithGroupID = (user, groupRef) => {
      const userRef = firebase.database().ref('User').child(user.uid)
      userRef.update({
        groupID: '',
        ping: 0,
      });
    }

    namePressed = async (memberName) => {
      const {currentGroup} = this.state.currentGroup
      const {currentUser} = firebase.auth()
      const groupRef = firebase.database().ref('Group').child(this.state.currentGroup).child('Members')

      const userEmail = await this.getUserEmail(currentUser, groupRef)

      if (userEmail==memberName){
        Alert.alert("You can't ping yourself!")
        return
      }
      else {
        Alert.alert(
          'Ping user?',
          'Would you like to ping ' + memberName + '?',
          [
            {
              text: "Yes",
              onPress: () => {
                groupRef.orderByChild('email').equalTo(memberName).on('value', snapshot => {
                  snapshot.forEach(child => {
                    this.setPingAttribute(child.val().uid,child.val().email)
                  })
                })
                //Alert.alert(memberName + " has been pinged.")
              }
            },
            {
              text: "No",
              onPress: () => {}
            }
          ]
        )
      }
    }

    getUserEmail = (currentUser, groupRef) => {
      return new Promise(function(resolve) {
        groupRef.child(currentUser.uid).on('value',snapshot => {
          if (snapshot.val()==null) {
            return;
          }
          else {
            const userEmail = snapshot.val().email
            resolve(userEmail)
          }
        })
      })
    }

    setPingAttribute = (targetUid,targetEmail) => {
      const targetRef = firebase.database().ref('User').child(targetUid)
      targetRef.update({
        ping: 1
      })
      if (targetRef == null){
        return
      }
      else {
        Alert.alert(targetEmail + " has been pinged.")
      }
    }

    componentDidMount(){
      const { currentGroup } = this.state;
      const { currentUser } = firebase.auth()
      const userRef = firebase.database().ref('User').child(currentUser.uid)
      userRef.orderByChild('groupID').once('value', snapshot => {
      if (snapshot.exists()) {
          this.setState({indicator: false})
          this.setState({currentGroup: snapshot.val().groupID})

          const groupVolumeRef = firebase.database().ref('Group').child(this.state.currentGroup);
          groupVolumeRef.orderByChild('thresholdVolume').on('value', snapshot => {
            if (snapshot.exists()) {
                global.groupThresholdVolume = snapshot.val().thresholdVolume;
                this.setState({value: snapshot.val().thresholdVolume});
            }
          })

          const groupRef = firebase.database().ref('Group').child(this.state.currentGroup).child('Members');
            groupRef.on('value', snapshot => {
              snapshot.forEach(child => {
                this.setState({membersList: [...this.state.membersList, child.val().email]})
                //console.log(child.auth())
              });
            });

        }
        else {
          this.setState({indicator : false})
        }
      })
    }

    render(){
      return(
        <ScrollView style={Styles.settingsContainer}>
          <Text style={Styles.userScreenTitle}>
            {this.state.currentGroup} Group
          </Text>
          <Text style = { Styles.decibels }>
            ({ Math.trunc(((this.state.value + 160)/160) * 100) }%) { this.state.value } dB
          </Text>
          <Slider
            value = { this.state.value }
            onValueChange = { value => {
                var volumeUpdate = {};
                volumeUpdate['/Group/' + this.state.currentGroup + '/thresholdVolume'] = value;
                firebase.database().ref().update(volumeUpdate)
            }}
            style = { Styles.slider }
            step = { 1 }
            minimumValue = { -160 }
            maximumValue = { 0 }
            thumbTintColor = '#C4C4C4'
            minimumTrackTintColor = 'black'
            maximumTrackTintColor = 'grey'
          />
          <TouchableOpacity style={Styles.signUpAndLogin}
                              onPress = {()=>this.props.navigation.navigate('MainNavigator')}>
            <Text style={Styles.returnHomeText}>
              Return to Home
            </Text>
          </TouchableOpacity>
          <Text style={Styles.groupPageLabelsText}>
                {"\n"}Members:
          </Text>
          <Text style={Styles.groupPageLabelsMember}>
            {this.state.membersList.map((msg) =>
            (<Text onPress={this.namePressed.bind(this,msg)}>{"\n   "}
              <Text style={Styles.pingText}>PING    </Text>
              {msg}{"\n"}</Text>)
            )}
          </Text>
          <TouchableOpacity id = {'leaveButton'} style = { Styles.userScreenButton }
              onPress = {this.leaveGroupButtonPressed}>
              <Text style = { Styles.groupButtonsText }>
                Leave Group
              </Text>
            </TouchableOpacity>
            <Text>{"\n"}</Text>
            <Text>{"\n"}</Text>
        </ScrollView>
      );
    }
  }
