import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import RNSoundLevel from 'react-native-sound-level';
import { PermissionsAndroid } from 'react-native';
import PushNotification from 'react-native-push-notification';
import PushNotificationIOS from "@react-native-community/push-notification-ios";
import Slider from '@react-native-community/slider';

const configure = {
  onNotification: function (notification) {
    console.log("NOTIFICATION:", notification);
    console.log(notification.foreground);
    notification.finish(PushNotificationIOS.FetchResult.NoData);
  },
  permissions: {
    alert: true,
    badge: true,
    sound: true
  },
  requestPermissions: true,
}

export default class MicrophoneListener extends Component {
    constructor(props) {
      super(props);
      PushNotification.configure(configure);
    }
	
	static defaultProps = {
      value: 0,
	};

	state = {
	  value: this.props.value,
	};

    componentDidMount(){
        const granted = PermissionsAndroid.check( PermissionsAndroid.PERMISSIONS.RECORD_AUDIO );
        if (granted) {
          console.log( "You can use the microphone" )
        }
        else {
          console.log( "Microphone permission denied" )
          requestMicrophonePermission()
        }
        RNSoundLevel.start()
        var count = 0;
        var fiveSoundFrames = new Array(5)
        var notificationPause = 20;
        RNSoundLevel.onNewFrame = (data) => {
            console.log('Sound level info', data)
            // If sound level is greater than slider value
			//Data is measured from -160 to 0, but only using -100 to 0 for slider values
            if (count == 5){
              fiveSoundFrames.shift();
              count--;
            }
            fiveSoundFrames.push(data.value);
            count++;
            const avg = fiveSoundFrames.reduce((p, c, _, a) => p + c/a.length, 0);
            console.log(avg);
            console.log(notificationPause);
            if(notificationPause < 20){
              notificationPause++;
            }
            if(count == 5 && avg >= this.state.value && notificationPause == 20){
              fiveSoundFrames = new Array(5);
              notificationPause = 0;
              PushNotification.localNotification({
                title: "Quiet down!", 
                message: "You are being too loud.", 
              });
            }
        }
    }

    componentWillUnmount() {
        RNSoundLevel.stop()
    }
	
	//Volume threshold slider
    render() {
        return (
        <View>
            <Text style={styles.text}>
			  {"\n"}Volume Threshold{"\n\n"}
			  {Math.trunc(((this.state.value + 160)/160) * 100)}% {Math.trunc(this.state.value)} Db
			</Text>
            <Slider
              {...this.props}
              onValueChange = {value => this.setState({value: value})}
			  style={{width: 300, height: 30}}
			  step = {1}
			  minimumValue = {-160}
			  maximumValue = {0}
			  thumbTintColor = 'white'
			  minimumTrackTintColor = 'pink'
			  maximumTrackTintColor = 'white'
            />
        </View>
        );
    }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
	color: 'white',
    textAlign: 'center',
    margin: 10,
  },
});

export async function requestMicrophonePermission()
{
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
      {
        'title': 'The Quiet Place',
        'message': 'The Quiet Place needs access to your microphone '
      }
    )
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("You can use the microphone")
      alert("You can use the microphone");
    } else {
      console.log("Microphone permission denied")
      alert("Microphone permission denied");
    }
  } catch (err) {
    console.warn(err)
  }
}

