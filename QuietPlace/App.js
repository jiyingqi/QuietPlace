import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import MicrophoneListener from './microphoneListener';
import SettingsScreen from './settingsPage';
import Styles from './styles/styles';

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
  },
  {
    tabBarOptions: tabBarOptions,
  },
  {
    initialRouteName: 'Home',
  },
);

export default createAppContainer(MainNavigator);
