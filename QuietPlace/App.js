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
import MicrophoneListener from './microphoneListener'
import {SlidingPane} from 'react-native-sliding-panes';

import {
    Button,
    StyleSheet,
    View,
    Text
} from 'react-native';
import { whileStatement } from '@babel/types';

export default class App extends React.Component {
   render() {
      return (
         <View style = {styles.container}>
               <Text style={styles.homelogo}>
                  Welcome to the Quiet Place
               </Text>
            <MicrophoneListener />
         </View>  
      );s
   }
}


const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#8740ad',
      alignItems: 'center',
      justifyContent: 'center',
   },
   homelogo: {
      fontWeight: 'bold', 
      fontStyle: 'normal',
      fontSize: Platform.OS === "ios" ? 27 : 30,
      lineHeight: 30,
      textAlign: 'center',
      color: "white", 
      width: 400,
	   paddingTop: 100
   }
});
