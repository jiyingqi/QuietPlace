// Group find component
// This is the group page after a user has logged in and before they have joined or created a group
// This component can join a group, create a group, or logout

import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, YellowBox } from 'react-native';
import  Styles  from './styles/styles';
import firebase from 'react-native-firebase';
import Spinner from 'react-native-loading-spinner-overlay';

export default class GroupFind extends Component {
    static navigationOptions = {
      title: 'Group',
    };

    constructor(props){
      super(props)

      this.state = {
				groupID: '',
				indicator: false,
        errorMessage: "",
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
					this.setState({indicator : false})
          this.props.navigation.navigate('DisplayGroup')
				}
				else {
          this.setState({errorMessage: "Group not found."})
					this.setState({indicator : false})
          return
				}
			})
		}

		//creates a group and adds the creator to the group if the groupID isn't taken in the database
		createGroup = (user, group) => {
			const groupRef = firebase.database().ref('Group').child(group)
			groupRef.orderByChild('thresholdVolume').once('value', snapshot => {
				if (snapshot.exists()) {
          this.setState({errorMessage: "A group with that name already exists."})
					this.setState({indicator : false})
          return
				}
				else {
					groupRef.set({
						thresholdVolume: 0,
					});
					this.addUserToGroup(user, groupRef)
					this.updateUserInfoWithGroupID(user, group)
					this.setState({indicator : false})
          this.props.navigation.navigate('DisplayGroup')
				}
			})
		}

		createGroupButton = () => {
			return (
				<TouchableOpacity style = { Styles.groupButtons }
					id = {'createButton'}
					onPress = {this.createGroupButtonPressed}>
					<Text style = { Styles.groupButtonsText }>
						Create Group
					</Text>
				</TouchableOpacity>
			)
		}

		joinGroupButton = () => {
			return (
				<TouchableOpacity style = { Styles.groupButtons }
				  id = {'joinButton'}
					onPress = {this.joinGroupButtonPressed}>
					<Text style = { Styles.groupButtonsText }>
						Join Group
					</Text>
				</TouchableOpacity>
			)
		};

		createGroupButtonPressed = () => {
      const { groupID } = this.state
      if (groupID == '') {
        this.setState({errorMessage: "Error: No Group ID Entered"})
        return
			}
			const { currentUser } = firebase.auth()
			this.setState({indicator : true})
			this.createGroup(currentUser, groupID)
		}

    joinGroupButtonPressed = () => {
      const { groupID } = this.state
      if (groupID == '') {
        this.setState({errorMessage: "Error: No Group ID Entered"})
        return
			}
			const { currentUser } = firebase.auth()
			this.setState({indicator : true})
			this.joinGroup(currentUser, groupID)
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
              {this.createGroupButton()}
							{this.joinGroupButton()}
            </View>
            <Text style={Styles.loginErrorMessage}>
              {this.state.errorMessage}
            </Text>
					</View>
      );
    }
  }
