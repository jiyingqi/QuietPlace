import React, { Component } from 'react';
import { View, Text } from 'react-native';
import RNSoundLevel from 'react-native-sound-level';
import { PermissionsAndroid } from 'react-native';

export default class MicrophoneListener extends Component {
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
        }
    }

    componentWillUnmount() {
        RNSoundLevel.stop()
    }

    render() {
        return (
        <View>
            <Text>
                Hello, this comes from inside microphoneListener.js
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
