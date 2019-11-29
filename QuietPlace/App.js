import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createAppContainer, createSwitchNavigator} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import MicrophoneListener from './microphoneListener';
import SettingsScreen from './settingsPage';
import Styles from './styles/styles';
import UserScreen from './userPage';

//import login-related pages
import Loading from './loading';
import UserLoginPage from './userLoginPage';
import UserSignUp from './userSignUp';
import GroupFind from './groupFind';
import DisplayGroup from './displayGroup';

class App extends Component {
  static navigationOptions = {
    title: 'Main',
  };

  render() {
    return (
      <View style = { Styles.container }>
        <Text style = { Styles.homelogo }>
          {"\n"}Welcome to the Quiet Place
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
    User: UserScreen,
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
    UserSignUp,
    UserLoginPage,
    GroupFind,
    MainNavigator,
    Loading,
    DisplayGroup,
  },
  {
    initialRouteName: 'MainNavigator'
  }
);

console.disableYellowBox = true;
export default createAppContainer(MainApp);
