import React, { Component } from 'react';
import { View, Text } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';

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
                 <Text style={styles.settingsLabel}>
                     Custom Timing
                 </Text>

                 <View style = {styles.row}>
                    <Text style={styles.labelText}>AM</Text>
                    <ModalDropdown 
                        defaultValue = 'Time'
                        style={styles.timeButton} 
                        textStyle={styles.buttonText} 
                        options={['6 pm', '7 pm']}/>
                    <ModalDropdown 
                        defaultValue = 'dB Level'
                        style={styles.dbButton} 
                        textStyle={styles.buttonText} 
                        options={['10 dB', '20 dB']}/>
                 </View>
                 <View style = {styles.row}>
                    <Text style={styles.labelText}>PM</Text>
                    <ModalDropdown 
                        defaultValue = 'Time'
                        style={styles.timeButton} 
                        textStyle={styles.buttonText} 
                        options={['6 pm', '7 pm']}/>
                    <ModalDropdown 
                        defaultValue = 'dB Level'
                        style={styles.dbButton} 
                        textStyle={styles.buttonText} 
                        options={['10 dB', '20 dB']}/>
                </View>   
                <View style = {styles.row}>
                    <Text style={styles.labText}>Maximum dB Level</Text>
                    <ModalDropdown 
                        defaultValue = 'dB Level'
                        style={styles.dbButton} 
                        textStyle={styles.buttonText} 
                        options={['10 dB', '20 dB']}/>
                </View>
           </View>
      );
    }
  }

