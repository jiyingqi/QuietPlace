import React, { Component } from 'react';
import { View, Text } from 'react-native';
import RNSoundLevel from 'react-native-sound-level';
import { PermissionsAndroid } from 'react-native';
import PushNotification from 'react-native-push-notification';
import PushNotificationIOS from "@react-native-community/push-notification-ios";

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

    componentDidMount(){
        requestMicrophonePermission()
        const granted = PermissionsAndroid.check( PermissionsAndroid.PERMISSIONS.RECORD_AUDIO );
        if (granted) {
          console.log( "You can use the microphone" )
        }
        else {
          console.log( "microphone permission denied" )
        }
        RNSoundLevel.start()
        RNSoundLevel.onNewFrame = (data) => {
            console.log('Sound level info', data)
            // if sound decibel is greater than 100
            if(data.value > 100){
              PushNotification.localNotification({
                title: "quiet down!", 
                message: "a housemate has alerted that you're being too loud", 
              });
            }
        }
    }

    componentWillUnmount() {
        RNSoundLevel.stop()
    }

    render() {
        return (
        <View>
            <Text>
                Hello, this comes from inside microphoneListener.js + notifications
            </Text>
        </View>
        );
    }
}

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

