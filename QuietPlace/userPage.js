import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import  Styles  from './styles/styles';
import firebase from 'react-native-firebase'

export default class userScreen extends Component {

  componentDidMount() {
    
  }

  render () {
    const {navigate} = this.props.navigation;
    return (
      <View style={Styles.settingsContainer}>

      </View>
    );
  }
}
