import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, Alert, YellowBox } from 'react-native';
import  Styles  from './styles/styles';
import firebase from 'react-native-firebase';
import Spinner from 'react-native-loading-spinner-overlay';

export default class displayGroup extends Component {
    static navigationOptions = {
      title: 'DisplayGroup',
    };
    constructor(props){
      super(props)
      this.state = {
        currentUser: null,
        currentGroup: '',
        indicator: false,
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
			});
		}

    componentDidMount(){
      const { currentGroup } = this.state
      const { currentUser } = firebase.auth()
      const userRef = firebase.database().ref('User').child(currentUser.uid)
      userRef.orderByChild('groupID').once('value', snapshot => {
				if (snapshot.exists()) {
          this.setState({indicator : false})
          this.setState({currentGroup: snapshot.val().groupID})
        }
        else {
          this.setState({indicator : false})
        }
      })
    }

    render(){
      return(
        <View style={Styles.settingsContainer}>
          <Text style={Styles.userScreenTitle}>
            {this.state.currentGroup}
          </Text>
          <TouchableOpacity style={Styles.signUpAndLogin}
                              onPress = {()=>this.props.navigation.navigate('MainNavigator')}>
            <Text style={Styles.signUpAndLoginText}>
              Return to HOME
            </Text>
          </TouchableOpacity>
          <Text style={Styles.groupPageLabelsText}>
                {"\n"}Members:
          </Text>
          <TouchableOpacity style = { Styles.userScreenButton }
              onPress = {this.leaveGroupButtonPressed}>
              <Text style = { Styles.groupButtonsText }>
                Leave Group
              </Text>
            </TouchableOpacity>
        </View>
      );
    }
  }
