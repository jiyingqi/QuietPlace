import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createAppContainer, createSwitchNavigator} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import MicrophoneListener from './microphoneListener';
import SettingsScreen from './settingsPage';
import Styles from './styles/styles';
import userScreen from './userPage';
import {createStackNavigator} from 'react-navigation-stack';

//import login-related pages
import Loading from './loading';
import userLoginPage from './userLoginPage';
import userSignUp from './userSignUp'

class App extends Component {
  static navigationOptions = {
    title: 'Main',
  };

  render() {
    return (
      <View style = { Styles.container }>
        <Text style = { Styles.homelogo }>
          Welcome to the Quiet Place
        </Text>
        <MicrophoneListener />
      </View>
    );
  }
}

const tabBarOptions = {
  activeTintColor: 'black',
  inactiveTintColor: '#8740ad',
  labelStyle: {
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontSize: Platform.OS === 'ios' ? 27 : 30,
    lineHeight: 30,
  },
  style: {
    backgroundColor: 'white',
  },
};

const MainNavigator = createBottomTabNavigator (
  {
    Home: App,
    Settings: SettingsScreen,
    User: userScreen,
  },
  {
    tabBarOptions: tabBarOptions,
  },
  {
    initialRouteName: 'Home',
  },
);

const MainApp = createSwitchNavigator(
  {
    userSignUp,
    userLoginPage,
    MainNavigator,
    Loading
  },
  {
    initialRouteName: 'MainNavigator'
  }
);

export default createAppContainer(MainApp);
