import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import  Styles  from './styles/styles';

export default class userSignUp extends Component {
  static navigationOptions = {
    title: 'User',
  };

  constructor(props) {
    super(props);
    this.state = {email: "",
                  password: "",
                  displaytext: ""};
  }

  submitButtonPressed = () => {

  }

  render () {
    const {navigate} = this.props.navigation;
    return (
      <View style={Styles.settingsContainer}>
        <Text style = {Styles.userScreenTitle}>
          Sign Up
        </Text>
        <TouchableOpacity style={Styles.signUpAndLogin}
                          onPress = {()=>this.props.navigation.navigate('userLoginPage')}>
          <Text style={Styles.signUpAndLoginText}>
            Already have an account? Login
          </Text>
        </TouchableOpacity>
        <TextInput
          style = {Styles.userScreenTextInput}
          placeholder = "Email"
          onChangeText = {text => this.setState({
            email: text})}
        />
        <TextInput
          style = {Styles.userScreenTextInput}
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
