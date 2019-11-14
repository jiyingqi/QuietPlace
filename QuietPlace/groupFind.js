import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, Alert} from 'react-native';
import  Styles  from './styles/styles';
import Firebase from './Config/FirebaseConfig';
import Spinner from 'react-native-loading-spinner-overlay';

export default class groupFind extends Component {
    static navigationOptions = {
      title: 'Group',
    };

    constructor(props){
      super(props)
  
      this.state = {
        groupID: '',
      }
		}

		//updates the groupID paramter for the user
		updateUserWithGroup = (user, group) => {
			const userRef = Firebase.database().ref('User/' + user.uid);
			userRef.update({
				groupID: group,
			});
		}

		//adds a user to the list of members under a groupID
		//returns true if the groupID exists and false otherwise
		addUserToGroup = (user, group) => {
			const groupRef = Firebase.database().ref('Group/' + group);
			groupRef.orderByChild('thresholdVolume').once('value', snapshot => {
				if (snapshot.exists()) {
					const userRef = groupRef.child('/Members/' + user.uid);
					userRef.set({
						name: user.displayName,
						email: user.email,
					});
					Alert.alert('Joined a group: ' + group)
					//return true;
				}
				else {
					Alert.alert('Group not found.')
				}
				//return false;
			})
		}

		createGroup = (group) => {
			const { currentUser } = Firebase.auth()
			const groupRef = Firebase.database().ref('Group/' + group);
			//only allows the creation of a group with a name that doesn't already exist in the database
			groupRef.orderByChild('thresholdVolume').once('value', snapshot => {
				if (snapshot.exists()) {
					Alert.alert('A group with that name already exists.')
				}
				else {
					groupRef.set({
						thresholdVolume: 0,
					});
					this.addUserToGroup(currentUser, group)
					this.updateUserWithGroup(currentUser, group)
					Alert.alert('Created a group: ' + group)
				}
			})
		}
		
		createGroupButtonPressed = () => {
			const { groupID } = this.state
      if (groupID == '')
        Alert.alert('No Group ID was entered')
      else {
				this.createGroup(groupID)
      }
		}

    joinGroupButtonPressed = () => {
			const { groupID } = this.state
			const { currentUser } = Firebase.auth()
      if (groupID == '')
        Alert.alert('No Group ID was entered')
      else {
				this.addUserToGroup(currentUser, groupID)
				// if (this.addUserToGroup(currentUser, groupID)) {
				// 	Alert.alert('Joined a group: ' + group)
				// }
				// else {
				// 	Alert.alert('Group not found.')
				// }
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
