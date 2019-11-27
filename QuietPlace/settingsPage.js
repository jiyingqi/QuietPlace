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
    let hour1, minute1;
    let hour2, minute2;
    let decibel1, decibel2;
    let time1, time2;
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
    hour1: '',
    minute1: '',
    hour2: '',
    minute2: '',
    decibel1: '',
    decibel2: '',
    time1: '',
    time2: '',
  };

    static navigationOptions = {
      title: 'Settings',
    };
    render() {
      const {navigate} = this.props.navigation;

      //checks if any of the dropdowns were set back to default value
      if(this.state.hour1!=0){
        global.hour1 = arrayHour[this.state.hour1-1];
      }
      else{
        global.hour1=-1;
      }
      if(this.state.minute1!=0){
        global.minute1 = arrayMinute[this.state.minute1-1];
      }
      else{
        global.minute1=-1;
      }
      if(this.state.hour2!=0){
        global.hour2 = arrayHour[this.state.hour2-1];
      }
      else{
        global.hour2=-1;
      }
      if(this.state.minute2!=0){
        global.minute2 = arrayMinute[this.state.minute2-1];
      }
      else{
        global.minute2=-1;
      }
      if(this.state.decibel1!=0){
        global.decibel1 = arrayDecibel[this.state.decibel1-1];
      }
      else{
        global.decibel1=1;
      }
      if(this.state.decibel2!=0){
        global.decibel2 = arrayDecibel[this.state.decibel2-1];
      }
      else{
        global.decibel2=1;
      }
      if(this.state.time1!=0){
        global.time1 = this.state.time1;
      }
      else{
        global.time1=-1;
      }
      if(this.state.time2!=0){
        global.time2 = this.state.time2;
      }
      else{
        global.time2=-1;
      }

      return (
          <View style = {Styles.settingsContainer}>
                 <Text style={Styles.userScreenTitle}>
                    Settings
                 </Text>
                 <Text style={Styles.userScreenText}>
                     Custom Timing
                 </Text>

                 <View style = {Styles.row}>
                    <Text style={Styles.settingsTimeLabel}>
                        At:
                    </Text>
                    <ModalDropdown
                        defaultValue = 'Hour'
                        style={Styles.timeButton}
                        textStyle={Styles.buttonText}
                        options={['Hour', '12', '1', '2',
                        '3', '4', '5',
                        '6', '7', '8',
                        '9', '10', '11']}

                        onSelect={(index,value) => {this.setState({hour1:index})}}
                    />
                    <Text style={Styles.colonText}>
                        :
                    </Text>
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
                        onSelect={(index,value) => {this.setState({minute1:index})}}
                    />
                    <Text>   </Text>
                    <ModalDropdown
                        defaultValue = 'AM/PM'
                        style={Styles.timeButtonMinute}
                        textStyle={Styles.buttonText}
                        options={['AM/PM','AM','PM']}
                        onSelect={(index,value) => {this.setState({time1:index})}}
                    />
                 </View>
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
                     onSelect={(index,value) => {this.setState({decibel1:index})}}
                 />
                 <View style = {Styles.row}>
                    <Text style={Styles.settingsTimeLabel}>
                        At:
                    </Text>
                    <ModalDropdown
                        defaultValue = 'Hour'
                        style={Styles.timeButton}
                        textStyle={Styles.buttonText}
                        options={['Hour', '12', '1', '2',
                        '3', '4', '5',
                        '6', '7', '8',
                        '9', '10', '11']}

                        onSelect={(index,value) => {this.setState({hour2:index})}}
                    />
                    <Text style={Styles.colonText}>
                        :
                    </Text>
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
                        onSelect={(index,value) => {this.setState({minute2:index})}}
                    />
                    <Text>   </Text>
                    <ModalDropdown
                        defaultValue = 'AM/PM'
                        style={Styles.timeButtonMinute}
                        textStyle={Styles.buttonText}
                        options={['AM/PM','AM','PM']}
                        onSelect={(index,value) => {this.setState({time2:index})}}
                    />
                </View>
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
                    onSelect={(index,value) => {this.setState({decibel2:index})}}
                />
              </View>
      );
    }
  }
