import React, { Component, createContext } from 'react';
import { View, Text } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import styles from "./styles/styles";

export default class SettingsScreen extends Component {
  constructor(props){
    super(props);
    var hourAM;
    var hourPM;
    var decibelAM;
    var decibelPM;
    var decibelMax;
  }

  state = {
    hourAM: '',
    minuteAM: '',
    hourPM: '',
    minutePM: '',
    decibelAM: '',
    decibelPM: '',
  };

    static navigationOptions = {
      title: 'Settings',
    };
    render() {
      const {navigate} = this.props.navigation;
      global.hourAM = this.state.hourAM;
      global.hourPM = this.state.hourPM;
      global.decibelAM = this.state.decibelAM;
      global.decibelPM = this.state.decibelPM;

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
                        defaultValue = 'Hour'
                        style={styles.timeButton}
                        textStyle={styles.buttonText}
                        options={[1, 2,
                        3, 4, 5,
                        6, 7, 8,
                        9, 10, 11, 12]}

                        onSelect={(index,value) => {this.setState({hourAM:value})}}
                    />
                    <Text style={styles.colonText}>:</Text>
                    <ModalDropdown
                        defaultValue = 'Minute'
                        style={styles.timeButtonMinute}
                        textStyle={styles.buttonText}
                        options={['Minute', 0, 1, 2,
                        3, 4, 5,
                        6, 7, 8,
                        9, 10, 11,
                        12, 13, 14,
                        15, 16, 17,
                        18, 19, 20,
                        21, 22, 23,
                        24, 25, 26,
                        27, 28, 29,
                        30, 31, 32,
                        33, 34, 35,
                        36, 37, 38,
                        39, 40, 41,
                        42, 43, 44,
                        45, 46, 47,
                        48, 49, 50,
                        51, 52, 53,
                        54, 55, 56,
                        57, 58, 59]}
                        onSelect={(index,value) => {this.setState({minuteAM:value})}}
                    />
                    <ModalDropdown
                        defaultValue = 'dB Level'
                        style={styles.dbButton}
                        textStyle={styles.buttonText}
                        options={['dB Level',
                        0, -5, -10,
                        -15, -20, -25,
                        -30, -35, -40,
                        -45, -50, -55,
                        -60, -65, -75,
                        -80, -85, -90,
                        -95, -100, -105,
                        -110, -115, -120,
                        -125, -130, -135,
                        -140, -145, -150,
                        -155, -160]}
                        onSelect={(index,value) => {this.setState({decibelAM:value})}}
                    />
                 </View>
                 <View style = {styles.row}>
                    <Text style={styles.labelText}>PM</Text>
                    <ModalDropdown
                        defaultValue = 'Time'
                        style={styles.timeButton}
                        textStyle={styles.buttonText}
                        options={['Time', 1, 2,
                        3, 4, 5,
                        6, 7, 8,
                        9, 10, 11, 12]}

                        onSelect={(index,value) => {this.setState({hourPM:value})}}
                    />
                    <Text style={styles.colonText}>:</Text>
                    <ModalDropdown
                        defaultValue = 'Minute'
                        style={styles.timeButtonMinute}
                        textStyle={styles.buttonText}
                        options={['Minute', 0, 1, 2,
                        3, 4, 5,
                        6, 7, 8,
                        9, 10, 11,
                        12, 13, 14,
                        15, 16, 17,
                        18, 19, 20,
                        21, 22, 23,
                        24, 25, 26,
                        27, 28, 29,
                        30, 31, 32,
                        33, 34, 35,
                        36, 37, 38,
                        39, 40, 41,
                        42, 43, 44,
                        45, 46, 47,
                        48, 49, 50,
                        51, 52, 53,
                        54, 55, 56,
                        57, 58, 59]}
                        onSelect={(index,value) => {this.setState({minutePM:value})}}
                    />
                    <ModalDropdown
                        defaultValue = 'dB Level'
                        style={styles.dbButton}
                        textStyle={styles.buttonText}
                        options={['dB Level',
                        0, -5, -10,
                        -15, -20, -25,
                        -30, -35, -40,
                        -45, -50, -55,
                        -60, -65, -75,
                        -80, -85, -90,
                        -95, -100, -105,
                        -110, -115, -120,
                        -125, -130, -135,
                        -140, -145, -150,
                        -155, -160]}
                        onSelect={(index,value) => {this.setState({decibelPM:value})}}
                    />
                </View>
                <Text></Text>
                <Text>     Testing Ouput:</Text>

                <Text>     {this.state.hourAM}:{this.state.minuteAM} AM, dB Level: {this.state.decibelAM}</Text>
                <Text>     {this.state.hourPM}:{this.state.minutePM} PM, dB Level: {this.state.decibelPM}</Text>

           </View>
      );
    }
  }
