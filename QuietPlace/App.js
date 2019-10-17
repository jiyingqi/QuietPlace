/**
 * QuietPlace App
 * https://github.com/jiyingqi/QuietPlace
 *
 * @format
 * @flow
 */

// Make sure to run react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
// To pick up changes and then you can run react-native run-android to display it
// Run react-native log-android to view console logs, you should be able to see the sound level info after granting microphone permissions for android

import React, { Component } from 'react';
import MicrophoneListener from './microphoneListener';


import {
    Button,
    StyleSheet,
    View,
    Text
} from 'react-native';

export default class App extends React.Component {
   render() {
      return (
         <View style = {styles.container}>
            <Text>Hello, this comes from inside App.js</Text>
            <MicrophoneListener />
         </View>
      );
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
   },
});

