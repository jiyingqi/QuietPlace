import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import  Styles  from './styles/styles';

export default class userScreen extends Component {

  render () {
    const {navigate} = this.props.navigation;
    return (
      <View style={Styles.settingsContainer}>

      </View>
    );
  }
}
