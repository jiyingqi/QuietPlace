import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
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
                    <Text style={styles.labelText}>AM
                    </Text>
                    <TouchableOpacity style={styles.timeButton}> 
                        <Text style={styles.buttonText}>Time</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.dbButton}> 
                        <Text style={styles.buttonText}>dB Level</Text>
                    </TouchableOpacity>
                 </View>
                 <View style = {styles.row}>
                    <Text style={styles.labelText}>PM
                    </Text>
                    <TouchableOpacity style={styles.timeButton}> 
                        <Text style={styles.buttonText}>Time</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.dbButton}> 
                        <Text style={styles.buttonText}>dB Level</Text>
                    </TouchableOpacity>
                </View>   
                <View style = {styles.row}>
                    <Text style={styles.labText}>Maximum dB Level
                    </Text>
                    <TouchableOpacity style={styles.dbButton}> 
                        <Text style={styles.buttonText}>dB Level</Text>
                    </TouchableOpacity>
                </View>
           </View>
      );
    }
  }

