import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import  Styles  from './styles/styles';

export default class userScreen extends Component {
  static navigationOptions = {
    title: 'User',
  };

  constructor(props) {
    super(props);
    this.state = {username: "", password: ""};
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
          onChangeText = {text => this.setState({
            password: text})}
        />
      </View>
    );
  }
}
