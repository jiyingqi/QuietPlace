/**
 * index.js file responsible for holding global variables used by the Quiet Place app.
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);

global.hour1 = -1;
global.minute1 = -1;
global.hour2 = -1;
global.minute2 = -1;
global.decibel1 = 1;
global.decibel2 = 1;
global.time1 = -1;
global.time2 = -1;
global.groupThresholdVolume = 0;
global.userThresholdVolume = 0;