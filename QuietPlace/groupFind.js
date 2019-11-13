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

    createGroupButtonPressed = () => {
      const { groupID } = this.state
      if (groupID == '')
        Alert.alert('No Group ID was entered')
      else {
				var db = Firebase.database();
				db.ref('group/' + this.state.groupID).set({
					groupID: this.state.groupID
				});

        Alert.alert('Created a group: ' + this.state.groupID)
      }
    }

    joinGroupButtonPressed = () => {
      const { groupID } = this.state
      if (groupID == '')
        Alert.alert('No Group ID was entered')
      else
        Alert.alert('Joined a group: ' + this.state.groupID)
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
