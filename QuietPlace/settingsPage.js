import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import  Styles  from './styles/styles';

export default class SettingsScreen extends Component {
    static navigationOptions = {
      title: 'Settings',
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
          <View style = {Styles.settingsContainer}>
                 <Text style={Styles.settings}>
                    Settings
                 </Text>
                 <Text style={Styles.settingsLabel}>
                     Custom Timing
                 </Text>
                 <View style = {Styles.row}>
                    <Text style={Styles.labelText}>AM
                    </Text>
                    <TouchableOpacity style={Styles.timeButton}> 
                        <Text style={Styles.buttonText}>Time</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.dbButton}> 
                        <Text style={Styles.buttonText}>dB Level</Text>
                    </TouchableOpacity>
                 </View>
                 <View style = {Styles.row}>
                    <Text style={Styles.labelText}>PM
                    </Text>
                    <TouchableOpacity style={Styles.timeButton}> 
                        <Text style={Styles.buttonText}>Time</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.dbButton}> 
                        <Text style={Styles.buttonText}>dB Level</Text>
                    </TouchableOpacity>
                </View>   
                <View style = {Styles.row}>
                    <Text style={Styles.labText}>Maximum dB Level
                    </Text>
                    <TouchableOpacity style={Styles.dbButton}> 
                        <Text style={Styles.buttonText}>dB Level</Text>
                    </TouchableOpacity>
                </View>
           </View>
      );
    }
  }

