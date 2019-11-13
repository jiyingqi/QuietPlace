import React, { Component } from 'react';
import { View, Text } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import Styles from './styles/styles';

let arrayHour = [];
let arrayMinute = [];
let arrayDecibel = [];

export default class SettingsScreen extends Component {
  constructor(props){
    super(props);
    let hourAM;
    let minuteAM;
    let hourPM;
    let minutePM;
    let decibelAM;
    let decibelPM;
    arrayHour[0]=12;
    for(let i=1; i<12;i++){
      arrayHour[i] = i;
    }
    for(let i=0;i<60;i++){
      arrayMinute[i] = i;
    }
    let dec = 0;
    for(let i=0; i<33;i++){
      arrayDecibel[i] = dec;
      dec = dec-5;
    }
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
      if(this.state.hourAM!=0){
        global.hourAM = arrayHour[this.state.hourAM-1];
      }
      else{
        global.hourAM=-1;
      }
      if(this.state.minuteAM!=0){
        global.minuteAM = arrayMinute[this.state.minuteAM-1];
      }
      else{
        global.minuteAM=-1;
      }
      if(this.state.hourPM!=0){
        global.hourPM = arrayHour[this.state.hourPM-1];
      }
      else{
        global.hourPM=-1;
      }
      if(this.state.minutePM!=0){
        global.minutePM = arrayMinute[this.state.minutePM-1];
      }
      else{
        global.minutePM=-1;
      }
      if(this.state.decibelAM!=0){
        global.decibelAM = arrayDecibel[this.state.decibelAM-1];
      }
      else{
        global.decibelAM=1;
      }
      if(this.state.decibelPM!=0){
        global.decibelPM = arrayDecibel[this.state.decibelPM-1];
      }
      else{
        global.decibelPM=1;
      }

      return (
          <View style = {Styles.settingsContainer}>
                 <Text style={Styles.settings}>
                    Settings
                 </Text>
                 <Text style={Styles.settingsLabel}>
                     Custom Timing
                 </Text>

                 <View style = {Styles.row}>
                    <Text style={Styles.labelText}>AM</Text>
                    <ModalDropdown
                        defaultValue = 'Hour'
                        style={Styles.timeButton}
                        textStyle={Styles.buttonText}
                        options={['Hour', '12', '1', '2',
                        '3', '4', '5',
                        '6', '7', '8',
                        '9', '10', '11']}

                        onSelect={(index,value) => {this.setState({hourAM:index})}}
                    />
                    <Text style={Styles.colonText}>:</Text>
                    <ModalDropdown
                        defaultValue = 'Minute'
                        style={Styles.timeButtonMinute}
                        textStyle={Styles.buttonText}
                        options={['Minute', '00', '01', '02',
                        '03', '04', '05',
                        '06', '07', '08',
                        '09', '10', '11',
                        '12', '13', '14',
                        '15', '16', '17',
                        '18', '19', '20',
                        '21', '22', '23',
                        '24', '25', '26',
                        '27', '28', '29',
                        '30', '31', '32',
                        '33', '34', '35',
                        '36', '37', '38',
                        '39', '40', '41',
                        '42', '43', '44',
                        '45', '46', '47',
                        '48', '49', '50',
                        '51', '52', '53',
                        '54', '55', '56',
                        '57', '58', '59']}
                        onSelect={(index,value) => {this.setState({minuteAM:index})}}
                    />
                    <ModalDropdown
                        defaultValue = 'dB Level'
                        style={Styles.dbButton}
                        textStyle={Styles.buttonText}
                        options={['dB Level',
                        '0', '-5', '-10',
                        '-15', '-20', '-25',
                        '-30', '-35', '-40',
                        '-45', '-50', '-55',
                        '-60', '-65', '-75',
                        '-80', '-85', '-90',
                        '-95', '-100', '-105',
                        '-110', '-115', '-120',
                        '-125', '-130', '-135',
                        '-140', '-145', '-150',
                        '-155', '-160']}
                        onSelect={(index,value) => {this.setState({decibelAM:index})}}
                    />
                 </View>
                 <View style = {Styles.row}>
                    <Text style={Styles.labelText}>PM</Text>
                    <ModalDropdown
                        defaultValue = 'Time'
                        style={Styles.timeButton}
                        textStyle={Styles.buttonText}
                        options={['Hour', '12', '1', '2',
                        '3', '4', '5',
                        '6', '7', '8',
                        '9', '10', '11']}

                        onSelect={(index,value) => {this.setState({hourPM:index})}}
                    />
                    <Text style={Styles.colonText}>:</Text>
                    <ModalDropdown
                        defaultValue = 'Minute'
                        style={Styles.timeButtonMinute}
                        textStyle={Styles.buttonText}
                        options={['Minute', '00', '01', '02',
                        '03', '04', '05',
                        '06', '07', '08',
                        '09', '10', '11',
                        '12', '13', '14',
                        '15', '16', '17',
                        '18', '19', '20',
                        '21', '22', '23',
                        '24', '25', '26',
                        '27', '28', '29',
                        '30', '31', '32',
                        '33', '34', '35',
                        '36', '37', '38',
                        '39', '40', '41',
                        '42', '43', '44',
                        '45', '46', '47',
                        '48', '49', '50',
                        '51', '52', '53',
                        '54', '55', '56',
                        '57', '58', '59']}
                        onSelect={(index,value) => {this.setState({minutePM:index})}}
                    />
                    <ModalDropdown
                        defaultValue = 'dB Level'
                        style={Styles.dbButton}
                        textStyle={Styles.buttonText}
                        options={['dB Level',
                        '0', '-5', '-10',
                        '-15', '-20', '-25',
                        '-30', '-35', '-40',
                        '-45', '-50', '-55',
                        '-60', '-65', '-75',
                        '-80', '-85', '-90',
                        '-95', '-100', '-105',
                        '-110', '-115', '-120',
                        '-125', '-130', '-135',
                        '-140', '-145', '-150',
                        '-155', '-160']}
                        onSelect={(index,value) => {this.setState({decibelPM:index})}}
                    />
                </View>
              </View>
      );
    }
  }
