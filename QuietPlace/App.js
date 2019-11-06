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
import {SlidingPane} from 'react-native-sliding-panes';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import SettingsScreen from "./settingsPage";
import styles from "./styles/styles";

import { View, Text } from 'react-native';
import { whileStatement } from '@babel/types';

//export default
class App extends React.Component {
   static navigationOptions = {
     title: 'Main',
   };
    render() {
       return (
          <View style = {styles.container}>
                <Text style={styles.homelogo}>
                  <Text>{"\n\n"}</Text>
                   Welcome to the Quiet Place
                </Text>
             <MicrophoneListener />
          </View>
       );
    }
 }

const MainNavigator = createBottomTabNavigator(
   {
   Home: App,
   Settings: SettingsScreen
   },
   {
     tabBarOptions: {
       activeTintColor: 'black',
       inactiveTintColor: '#8740ad',
       labelStyle: {
         fontWeight: 'bold',
         fontStyle: 'normal',
         fontSize: Platform.OS === "ios" ? 27 : 30,
         lineHeight: 30,
       },
       style: {
           backgroundColor: 'white',
       },
     }
     },
   {
   initialRouteName: 'Home'
   },
);


export default createAppContainer(MainNavigator);
