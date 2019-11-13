/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);

global.hourAM = -1;
global.minuteAM = -1;
global.hourPM = -1;
global.minutePM = -1;
global.decibelAM = 1;
global.decibelPM = 1;
