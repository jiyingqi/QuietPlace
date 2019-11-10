import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import  Styles  from './styles/styles';

export default class userScreen extends Component {
  static navigationOptions = {
    title: 'User',
  };

  constructor(props) {
    super(props);
    this.state = {username: "",
                  password: "",
                  displaytext: ""};
  }

  submitButtonPressed = () => {
    this.setState({
      displaytext: this.state.username
    })
  }

  render () {
    const {navigate} = this.props.navigation;
    return (
      <View style={Styles.settingsContainer}>
        <Text style = {Styles.userScreenTitle}>
          User Login
        </Text>
        <TextInput
          style = {Styles.userScreenTextInput}
          placeholder = "Username"
          onChangeText = {text => this.setState({
            username: text})}
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
        <Text style={Styles.userScreenTitle}>
          {this.state.displaytext}
        </Text>
      </View>
    );
  }
}
