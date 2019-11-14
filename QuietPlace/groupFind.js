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

		addUserToGroup(user, group) {
			const db = Firebase.database()
			db.ref('Group/' + group + '/Members/' + user.uid).update({
				name: user.displayName,
				email: user.email
			});
		}

		createGroup(group) {
			const { currentUser } = Firebase.auth()
			const db = Firebase.database()
			db.ref('Group/' + group).set({
				thresholdVolume: 0,
			});
			this.addUserToGroup(currentUser, group)
		}
		
		createGroupButtonPressed = () => {
			const { groupID } = this.state
      if (groupID == '')
        Alert.alert('No Group ID was entered')
      else {
				this.createGroup(groupID)
        Alert.alert('Created a group: ' + groupID)
      }
		}

    joinGroupButtonPressed = () => {
			const { groupID } = this.state
			const { currentUser } = Firebase.auth()
      if (groupID == '')
        Alert.alert('No Group ID was entered')
      else {
				this.addUserToGroup(currentUser, groupID)
				Alert.alert('Joined a group: ' + groupID)
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
