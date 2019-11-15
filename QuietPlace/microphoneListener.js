import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { PermissionsAndroid } from 'react-native';
import RNSoundLevel from 'react-native-sound-level';
import PushNotification from 'react-native-push-notification';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import Slider from '@react-native-community/slider';
import Speedometer from 'react-native-speedometer-chart';
import Styles from './styles/styles';

const configure = {
  onNotification: function (notification) {
    console.log('NOTIFICATION:', notification);
    console.log(notification.foreground);
    notification.finish(PushNotificationIOS.FetchResult.NoData);
  },
  permissions: {
    alert: true,
    badge: true,
    sound: true,
  },
  requestPermissions: true,
}

export default class MicrophoneListener extends Component {
  constructor(props) {
    super(props);
    PushNotification.configure(configure);
    this.soundLevel = -160;

    setInterval(() => {
      const hr = new Date().getHours();
      const mn = new Date().getMinutes();
      this.setState({
        hour: hr,
        minute: mn,
      })
    }, 1000);
  }

	static defaultProps = {
    value: 0,
	};

	state = {
	  value: this.props.value,
    lastSetSlider: '',
	  hour: '',
	  minute: '',
	};

  componentDidMount(){
    const granted = PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.RECORD_AUDIO);
    if (granted) {
      console.log('You can use the microphone');
    } else {
      console.log('Microphone permission denied');
      requestMicrophonePermission();
    }

    RNSoundLevel.start();
    let count = 0;
    let fiveSoundFrames = [5];
    let notificationPause = 20;

    RNSoundLevel.onNewFrame = (data) => {
      console.log('Sound level info', data);
      this.soundLevel = data.value;
      if (count == 5) {
        fiveSoundFrames.shift();
        count--;
      }

      fiveSoundFrames.push(data.value);
      count++;
      const avg = fiveSoundFrames.reduce((p, c, _, a) => p + c/a.length, 0);
      console.log(avg);
      if (notificationPause < 20) {
        notificationPause++;
      }
      if(global.hour1!=-1 && global.minute1!=-1 && global.hour2!=-1 &&
          global.minute2!=-1 && global.decibel1!=1 && global.decibel2!=1 &&
          global.time1!=-1 && global.time2!=-1){

        if(global.hour1==12 && global.time1==1){
          global.hour1 = 0;
        }
        else if(global.hour2==12 && global.time2==1){
          global.hour2 = 0;
        }
        if(global.hour1==12&&global.time1==2){
          global.hour1 = global.hour1-12;
        }
        else if(global.hour2==12 && global.time2==2){
          global.hour2 = global.hour2-12;
        }

        if(global.time1==1 && global.time2==2){
          if(this.state.hour>=global.hour1 && this.state.hour<global.hour2+12){
            this.state.value=global.decibel1;
            if(this.state.hour==global.hour1){
              if(this.state.minute<global.minute1){
                this.state.value = global.decibel2;
              }
            }
          }
          else if(this.state.hour<global.hour1 || this.state.hour>=global.hour2+12){
            this.state.value=global.decibel2;
            if(this.state.hour==global.hour2+12){
              if(this.state.minute<global.minute2){
                this.state.value = global.decibel1;
              }
            }
          }
        }

        else if(global.time1==2 && global.time2==2){
          if(global.hour1>global.hour2){
            let tempHour = global.hour1;
            global.hour1 = global.hour2;
            global.hour2 = tempHour;
            let tempDec = global.decibel1;
            global.decibel1 = global.decibel2;
            global.decibel2 = tempDec;
            let tempMin = global.minute1;
            global.minute1 = global.minute2;
            global.minute2 = tempMin;
          }
          if(this.state.hour>=global.hour1+12 && this.state.hour<global.hour2+12){
            this.state.value=global.decibel1;
            if(this.state.hour==global.hour1+12){
              if(this.state.minute<global.minute1){
                this.state.value = global.decibel2;
              }
            }
          }
          else{
            this.state.value=global.decibel2;
            if(this.state.hour==global.hour2+12){
              if(this.state.minute<global.minute2){
                this.state.value = global.decibel1;
              }
            }
          }
        }

        else if(global.time1==2 && global.time2==1){
          if(this.state.hour>=global.hour1+12 || this.state.hour<global.hour2){
            this.state.value=global.decibel1;
            if(this.state.hour==global.hour1+12){
              if(this.state.minute<global.minute1){
                this.state.value = global.decibel2;
              }
            }
          }
          else if(this.state.hour<global.hour1+12 && this.state.hour>=global.hour2){
            this.state.value=global.decibel2;
            if(this.state.hour==global.hour2){
              if(this.state.minute<global.minute2){
                this.state.value = global.decibel1;
              }
            }
          }
        }

        else if(global.time1==1 && global.time2==1){
          if(global.hour1>global.hour2){
            let tempHour = global.hour1;
            global.hour1 = global.hour2;
            global.hour2 = tempHour;
            let tempDec = global.decibel1;
            global.decibel1 = global.decibel2;
            global.decibel2 = tempDec;
            let tempMin = global.minute1;
            global.minute1 = global.minute2;
            global.minute2 = tempMin;
          }
          if(this.state.hour>=global.hour1 && this.state.hour<global.hour2){
            this.state.value=global.decibel1;
            if(this.state.hour==global.hour1){
              if(this.state.minute<global.minute1){
                this.state.value = global.decibel2;
              }
            }
          }
          else{
            this.state.value=global.decibel2;
            if(this.state.hour==global.hour2){
              if(this.state.minute<global.minute2){
                this.state.value = global.decibel1;
              }
            }
          }
        }
      }
      if (count == 5 && avg >= this.state.value && notificationPause == 20) {
        fiveSoundFrames = [5];
        notificationPause = 0;
        PushNotification.localNotification({
          title: 'Quiet down!',
          message: 'You are being too loud.',
        });
      }
    }
  }

  componentWillUnmount() {
    RNSoundLevel.stop();
  }

	//Volume Level Display & Volume Threshold Slider
  render() {
    return (
      <View>
        <Speedometer
          style = { Styles.speedometer }
          size = { 250 }
          value = { Math.trunc(((this.soundLevel + 160)/160) * 100) }
          totalValue = { 100 }
          innerColor = '#8740ad'
          internalColor = 'white'
          outerColor = '#9c70b5'
          showText
          text = { `${ Math.trunc(this.soundLevel) } dB` }
          textStyle = { Styles.decibels }
          showPercent
          percentStyle = {
            {
              fontFamily: 'Montserrat-Light',
              color: 'white'
            }
          }
          percentSize = { 0.9 }
        />
        <Text style = { Styles.volumeText }>
          Current Volume Level{ '\n' }
          Based on User Settings: {"\n"}{this.state.value} dBs
        </Text>
        <Text style = { Styles.decibels }>
          ({ Math.trunc(((this.state.value + 160)/160) * 100) }%) { this.state.value } dB
        </Text>
        <Slider
          { ...this.props }
          onValueChange = { value => this.setState({ value: value }) }
          style = { Styles.slider }
          step = { 1 }
          minimumValue = { -160 }
          maximumValue = { 0 }
          thumbTintColor = '#C4C4C4'
          minimumTrackTintColor = 'black'
          maximumTrackTintColor = 'grey'
        />
        <Text style = { Styles.thresholdText }>
          Volume Threshold{ '\n' }
        </Text>
      </View>
    );
  }
}

export async function requestMicrophonePermission() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
      {
        'title': 'The Quiet Place',
        'message': 'The Quiet Place needs access to your microphone'
      }
    );

    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use the microphone');
      alert('You can use the microphone');
    } else {
      console.log('Microphone permission denied');
      alert('Microphone permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
}
