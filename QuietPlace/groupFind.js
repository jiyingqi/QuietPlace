import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, Alert, YellowBox } from 'react-native';
import  Styles  from './styles/styles';
import firebase from 'react-native-firebase';
import Spinner from 'react-native-loading-spinner-overlay';

export default class groupFind extends Component {
    static navigationOptions = {
      title: 'Group',
    };

    constructor(props){
      super(props)

      this.state = {
				groupID: '',
				indicator: false,
			};

			YellowBox.ignoreWarnings(['Setting a timer']);
		}

		//updates the groupID parameter for the user
		updateUserInfoWithGroupID = (user, group) => {
			const userRef = firebase.database().ref('User').child(user.uid)
			userRef.update({
				groupID: group,
				ping: 0,
				uid: user.uid
			});
		}

		//adds a user to the list of members under a groupID
		addUserToGroup = (user, groupRef) => {
			const userRef = groupRef.child('Members').child(user.uid)
			userRef.set({
				name: user.displayName,
				email: user.email,
				uid: user.uid
			});
		}

		//user joins the group if the groupID exists in the database
		joinGroup = (user, group) => {
			const groupRef = firebase.database().ref('Group').child(group)
			groupRef.orderByChild('thresholdVolume').once('value', snapshot => {
				if (snapshot.exists()) {
					this.addUserToGroup(user, groupRef)
					this.updateUserInfoWithGroupID(user, group)
					//Alert.alert('Joined a group: ' + group)
					this.setState({indicator : false})
          this.props.navigation.navigate('DisplayGroup')
				}
				else {
					Alert.alert('Group not found.')
					this.setState({indicator : false})
				}
			})
		}

		//creates a group and adds the creator to the group if the groupID isn't taken in the database
		createGroup = (user, group) => {
			const groupRef = firebase.database().ref('Group').child(group)
			groupRef.orderByChild('thresholdVolume').once('value', snapshot => {
				if (snapshot.exists()) {
					Alert.alert('A group with that name already exists.')
					this.setState({indicator : false})
				}
				else {
					groupRef.set({
						thresholdVolume: 0,
					});
					this.addUserToGroup(user, groupRef)
					this.updateUserInfoWithGroupID(user, group)
					//Alert.alert('Created a group: ' + group)
					this.setState({indicator : false})
          this.props.navigation.navigate('DisplayGroup')
				}
			})
		}

		createGroupButtonPressed = () => {
			const { groupID } = this.state
			const { currentUser } = firebase.auth()
			this.setState({indicator : true})
      if (groupID == '') {
				Alert.alert('No Group ID was entered.')
				this.setState({indicator : false})
			}
      else {
				this.createGroup(currentUser, groupID)
      }
		}

    joinGroupButtonPressed = () => {
			const { groupID } = this.state
			const { currentUser } = firebase.auth()
			this.setState({indicator : true})
      if (groupID == '') {
				Alert.alert('No Group ID was entered.')
				this.setState({indicator : false})
			}
      else {
				this.joinGroup(currentUser, groupID)
			}
    }

    render() {
      return (
          <View style = { Styles.settingsContainer }>
						<Spinner
							visible={this.state.indicator}
							textContent={"Loading..."}
							textStyle={{color: 'white'}}
						/>
            <Text style = { Styles.userScreenTitle }>
              Create or Join a Quiet Group
            </Text>
            <TouchableOpacity style={Styles.signUpAndLogin}
                onPress = {()=>this.props.navigation.navigate('MainNavigator')}>
                <Text style={Styles.returnHomeText}>
                    Return to home
                </Text>
            </TouchableOpacity>
            <TextInput
              style = { Styles.groupTextBox }
              autoCapitalize = "none"
              placeholder = 'Enter a Group ID'
              onChangeText={(text) => this.setState({groupID: text})}
            />
            <View style={ Styles.fixToText }>
              <TouchableOpacity style = { Styles.groupButtons }
                onPress = {this.createGroupButtonPressed}>
                <Text style = { Styles.groupButtonsText }>
                  Create Group
                </Text>
              </TouchableOpacity>
            <TouchableOpacity style = { Styles.groupButtons }
                onPress = {this.joinGroupButtonPressed}>
                <Text style = { Styles.groupButtonsText }>
                  Join Group
                </Text>
              </TouchableOpacity>
            </View>
					</View>
      );
    }
  }
