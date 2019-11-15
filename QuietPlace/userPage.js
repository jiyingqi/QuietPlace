import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import  Styles  from './styles/styles';
import firebase from 'react-native-firebase';

export default class userScreen extends Component {

  state = {currentUser: null}

  signOutButtonPressed = () => {
    firebase.auth().signOut()
    this.props.navigation.navigate('Loading')
  }

  loginButtonPressed = () => {
    this.props.navigation.navigate('userLoginPage')
  }

  signUpButtonPressed = () => {
    this.props.navigation.navigate('userSignUp')
  }

  groupButtonPressed = () => {
    this.props.navigation.navigate('groupFind')
  }

  componentDidMount() {
    const {currentUser} = firebase.auth()
    this.setState({currentUser})
  }

  render () {
    const {currentUser} = this.state
    const loginbutton = <TouchableOpacity style={Styles.userScreenButton}
                                                  onPress = {this.loginButtonPressed}>
                                  <Text style={Styles.userScreenButtonText}>
                                    Login
                                  </Text>
                              </TouchableOpacity>
    const signupbutton = <TouchableOpacity style={Styles.userScreenButton}
                                                 onPress = {this.signUpButtonPressed}>
                                  <Text style={Styles.userScreenButtonText}>
                                    Sign Up
                                  </Text>
                               </TouchableOpacity>
    const signoutbutton = <TouchableOpacity style={Styles.userScreenButton}
                                                  onPress = {this.signOutButtonPressed}>
                                  <Text style={Styles.userScreenButtonText}>
                                    Sign Out
                                  </Text>
                                </TouchableOpacity>
    const groupbutton = <TouchableOpacity style={Styles.userScreenButton}
                                                  onPress = {this.groupButtonPressed}>
                                  <Text style={Styles.userScreenButtonText}>
                                    Create or Join a Group
                                  </Text>
                                </TouchableOpacity>


    return (
      <View style={Styles.settingsContainer}>
        <Text style={Styles.userScreenTitle}>
          Welcome
        </Text>
        <Text style={Styles.userScreenText}>
          {currentUser && currentUser.email}
        </Text>
        {currentUser? groupbutton : null}
        {currentUser? signoutbutton : loginbutton}
      </View>
    );
  }
}
