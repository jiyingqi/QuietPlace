import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import  Styles  from './styles/styles';
import firebase from 'react-native-firebase';
import Spinner from 'react-native-loading-spinner-overlay';

export default class UserSignUp extends Component {
  static navigationOptions = {
    title: 'User',
  };

  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      errorMessage: "",
      indicator: false,
    };
  }

  submitButtonPressed = () => {
    const { email, password } = this.state
    if (email==="" || password===""){
      this.setState({errorMessage: "Error: empty input(s)"})
      return;
    }
    this.setState({indicator : true})
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(user => {this.props.navigation.navigate('MainNavigator')
                     this.setState({indicator : false})})
      .catch(error => this.setState({errorMessage: error.message, indicator:false}))
  }

  render () {
    const {navigate} = this.props.navigation;
    return (
      <View style={Styles.settingsContainer}>
        <Spinner
          visible={this.state.indicator}
          textContent={"Loading..."}
          textStyle={{color: 'white'}}
        />
        <Text style = {Styles.userScreenTitle}>
          Sign Up
        </Text>
        <TouchableOpacity style={Styles.signUpAndLogin}
                            onPress = {()=>this.props.navigation.navigate('MainNavigator')}>
          <Text style={Styles.returnHomeText}>
            Return to home
          </Text>
        </TouchableOpacity>
        <TextInput
          style = {Styles.userScreenTextInput}
          autoCorrect={false}
          blurOnSubmit={true}
          keyboardType="email-address"
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
        <TouchableOpacity id = {'submitButton'}
                          style = {Styles.userScreenButton}
                          onPress = {this.submitButtonPressed}>
          <Text style={Styles.groupButtonsText}>
            Signup
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.userScreenButton}
                          onPress = {()=>this.props.navigation.navigate('UserLoginPage')}>
          <Text style={Styles.groupButtonsText}>
            Already have an account? Login
          </Text>
        </TouchableOpacity>
        <Text style={Styles.loginErrorMessage}> {this.state.errorMessage} </Text>
      </View>
    );
  }
}
