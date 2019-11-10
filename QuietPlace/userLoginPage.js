import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import  Styles  from './styles/styles';
import firebase from 'react-native-firebase'

export default class userLoginPage extends Component {
  static navigationOptions = {
    title: 'User',
  };

  constructor(props) {
    super(props);
    this.state = {email: "",
                  password: "",
                  errorMessage: ""};
  }

  submitButtonPressed = () => {
    const {email,password} = this.state
    firebase.auth()
      .signInWithEmailAndPassword(email,password)
      .then(()=>this.props.navigation.navigate('MainNavigator'))
      .catch(error=>this.setState({errorMessage: error.message}))
  }

  render () {
    const {navigate} = this.props.navigation;
    return (
      <View style={Styles.settingsContainer}>
        <Text style = {Styles.userScreenTitle}>
          Login
        </Text>
        <TouchableOpacity style={Styles.signUpAndLogin}
                          onPress = {()=>this.props.navigation.navigate('userSignUp')}>
          <Text style={Styles.signUpAndLoginText}>
            New user? Create an account
          </Text>
        </TouchableOpacity>
        <TextInput
          style = {Styles.userScreenTextInput}
          autoCapitalize="none"
          placeholder = "Email"
          onChangeText = {text => this.setState({
            email: text})}
        />
        <TextInput
          style = {Styles.userScreenTextInput}
          autoCapitalize="none"
          placeholder = "Password"
          secureTextEntry = {true}
          onChangeText = {text => this.setState({
            password: text})}
        />
        <TouchableOpacity style = {Styles.userScreenButton}
                          onPress = {this.submitButtonPressed}>
          <Text style={Styles.userScreenButtonText}>
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
