import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import  Styles  from './styles/styles';

export default class userScreen extends Component {
  static navigationOptions = {
    title: 'User',
  };
  render () {
    const {navigate} = this.props.navigation;
    return (
      <View style={Styles.container}>
        <Text style = {Styles.userScreenTitle}>
          User Login
        </Text>
      </View>
    );
  }
}
