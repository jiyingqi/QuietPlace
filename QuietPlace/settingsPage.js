import React, { Component } from 'react';
import { Button, StyleSheet, View, Text } from 'react-native';
import styles from "./styles/styles";

export default class SettingsScreen extends Component {
    static navigationOptions = {
      title: 'Settings',
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
          <View style = {styles.settingsContainer}>
                 <Text style={styles.settings}>
                    Settings
                 </Text>
           </View>
      );
    }
  }

