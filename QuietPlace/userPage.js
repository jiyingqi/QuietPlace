import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import  Styles  from './styles/styles';
import firebase from 'react-native-firebase'

export default class userScreen extends Component {

  state = {currentUser: null}

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
        
      </View>
    );
  }
}
