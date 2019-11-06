import React, { Component, createContext } from 'react';
import { View, Text } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import styles from "./styles/styles";

export default class SettingsScreen extends Component {
  constructor(props){
    super(props);
    var timeAM;
    var timePM;
    var decibelAM;
    var decibelPM;
    var decibelMax;
  }

  state = {
    timeAM: '',
    timePM: '',
    decibelAM: '',
    decibelPM: '',
  };

    static navigationOptions = {
      title: 'Settings',
    };
    render() {
      const {navigate} = this.props.navigation;
      global.timeAM = this.state.timeAM;
      global.timePM = this.state.timePM;
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
                        defaultValue = 'Time'
                        style={styles.timeButton}
                        textStyle={styles.buttonText}
                        options={['Time', 1, 2,
                        3, 4, 5,
                        6, 7, 8,
                        9, 10, 11, 12]}

                        onSelect={(index,value) => {this.setState({timeAM:value})}}
                    />
                    <Text>{"\n"} :00
                    </Text>
                    <ModalDropdown
                        defaultValue = 'dB Level'
                        style={styles.dbButton}
                        textStyle={styles.buttonText}
                        options={['dB Level',-160, -155,
                        -150, -145,
                        -140, -135,
                        -130, -125,
                        -120, -115,
                        -110, -105,
                        -100, -95,
                        -90, -85,
                        -80, -75,
                        -70, -65,
                        -60, -55,
                        -50, -45,
                        -40, -35,
                        -30, -25,
                        -20, -15,
                        -10, -5,
                        0]}
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

                        onSelect={(index,value) => {this.setState({timePM:value})}}
                    />
                    <Text>{"\n"} :00
                    </Text>
                    <ModalDropdown
                        defaultValue = 'dB Level'
                        style={styles.dbButton}
                        textStyle={styles.buttonText}
                        options={['dB Level',-160, -155,
                        -150, -145,
                        -140, -135,
                        -130, -125,
                        -120, -115,
                        -110, -105,
                        -100, -95,
                        -90, -85,
                        -80, -75,
                        -70, -65,
                        -60, -55,
                        -50, -45,
                        -40, -35,
                        -30, -25,
                        -20, -15,
                        -10, -5,
                        0]}
                        onSelect={(index,value) => {this.setState({decibelPM:value})}}
                    />
                </View>
                <Text></Text>
                <Text>     Testing Ouput:</Text>

                <Text>     {this.state.timeAM} AM, dB Level: {this.state.decibelAM}</Text>
                <Text>     {this.state.timePM} PM, dB Level: {this.state.decibelPM}</Text>

           </View>
      );
    }
  }
