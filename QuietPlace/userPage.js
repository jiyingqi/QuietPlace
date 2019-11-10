import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import  Styles  from './styles/styles';
import firebase from 'react-native-firebase'

export default class userScreen extends Component {

  state = {currentUser: null}

  signOutButtonPressed = () => {
    firebase.auth().signOut()
    this.props.navigation.navigate('userLoginPage')
  }

  componentDidMount() {
    const {currentUser} = firebase.auth()
    this.setState({currentUser})
  }

  render () {
    const {currentUser} = this.state
    return (
      <View style={Styles.settingsContainer}>
        <Text style={Styles.userScreenTitle}>
          Welcome
        </Text>
        <Text style={Styles.userScreenText}>
          {currentUser && currentUser.email}
        </Text>
        <TouchableOpacity style={Styles.userScreenButton}
                          onPress = {this.signOutButtonPressed}>
          <Text style={Styles.userScreenButtonText}>
            Sign out
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
