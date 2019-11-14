import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, Alert, YellowBox } from 'react-native';
import  Styles  from './styles/styles';
import firebase from 'react-native-firebase';

export default class groupFind extends Component {
    static navigationOptions = {
      title: 'Group',
    };

    constructor(props){
      super(props)
  
      this.state = {
        groupID: '',
			}
			
			YellowBox.ignoreWarnings(['Setting a timer']);
		}

		//updates the groupID parameter for the user
		updateUserInfoWithGroupID = (user, group) => {
			const userRef = firebase.database().ref('User/' + user.uid);
			userRef.update({
				groupID: group,
			});
		}

		//adds a user to the list of members under a groupID 
		addUserToGroup = (user, groupRef) => {
			const userRef = groupRef.child('/Members/' + user.uid);
			userRef.set({
				name: user.displayName,
				email: user.email,
			});
		}

		//user joins the group if the groupID exists in the database
		joinGroup = (user, group) => {
			const groupRef = firebase.database().ref('Group/' + group);
			groupRef.orderByChild('thresholdVolume').once('value', snapshot => {
				if (snapshot.exists()) {
					this.addUserToGroup(user, groupRef)
					this.updateUserInfoWithGroupID(user, group)
					Alert.alert('Joined a group: ' + group)
				}
				else {
					Alert.alert('Group not found.')
				}
			})
		}

		//creates a group and adds the creator to the group if the groupID isn't taken in the database
		createGroup = (user, group) => {
			const groupRef = firebase.database().ref('Group/' + group);
			groupRef.orderByChild('thresholdVolume').once('value', snapshot => {
				if (snapshot.exists()) {
					Alert.alert('A group with that name already exists.')
				}
				else {
					groupRef.set({
						thresholdVolume: 0,
					});
					this.addUserToGroup(user, groupRef)
					this.updateUserInfoWithGroupID(user, group)
					Alert.alert('Created a group: ' + group)
				}
			})
		}
		
		createGroupButtonPressed = () => {
			const { groupID } = this.state
			const { currentUser } = firebase.auth()
      if (groupID == '')
        Alert.alert('No Group ID was entered')
      else {
				this.createGroup(currentUser, groupID)
      }
		}

    joinGroupButtonPressed = () => {
			const { groupID } = this.state
			const { currentUser } = firebase.auth()
      if (groupID == '')
        Alert.alert('No Group ID was entered')
      else {
				this.joinGroup(currentUser, groupID)
			}
    }
  
    render() {
      return (
          <View style = { Styles.settingsContainer }>
            <Text style = { Styles.userScreenTitle }>
              Create or Join a Quiet Group
            </Text>
            <TouchableOpacity style={Styles.signUpAndLogin}
                onPress = {()=>this.props.navigation.navigate('MainNavigator')}>
                <Text style={Styles.signUpAndLoginText}>
                    Home
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
