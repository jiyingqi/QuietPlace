// Styles sheet used by Quiet Place app

import { StyleSheet, Platform } from 'react-native';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#816fde',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hiddenContainer: {
    top: window.height,
    bottom: -window.height
  },
  homelogo: {
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontSize: Platform.OS === 'ios' ? 27 : 30,
    lineHeight: 30,
    textAlign: 'center',
    color: 'white',
    width: 400,
    paddingTop: 100,
  },
  settingsContainer: {
    flex: 1,
    backgroundColor: '#816fde',
  },
  settings: {
    position: 'absolute',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 27,
    marginTop: 50,
    alignSelf: 'center',
  },
  settingsLabel: {
    color: 'white',
    marginTop: 130,
    fontSize: 20,
    marginLeft: 25,
  },
  settingsTimeLabel: {
    color: 'white',
    marginTop: 20,
    fontSize: 20,
    marginLeft: 20,
    marginRight: 5,
  },
  label: {
    fontWeight: 'bold',
    fontSize: Platform.OS === 'ios' ? 30 : 35,
    color: 'white',
    textAlign: 'center',
    marginTop: 125,
  },
  volume: {
    fontSize: Platform.OS === 'ios' ? 25 : 30,
    marginBottom: 25,
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Montserrat-Light',
  },
  speedometer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  decibels: {
    fontSize: Platform.OS === 'ios' ? 25 : 30,
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Montserrat-Light',
  },
  volumeText: {
    fontSize: Platform.OS === 'ios' ? 25 : 30,
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Montserrat-Light',
    marginTop: -50,
    marginBottom: 50,
  },
  slider: {
    width: Platform.OS === 'ios' ? 300 : 350,
    height: 50,
    borderRadius: 0,
  },
  thresholdText: {
    fontSize: Platform.OS === 'ios' ? 25 : 30,
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Montserrat-Light',
    marginBottom: 100,
  },
  timeButton: {
    backgroundColor:'white',
    marginLeft: 10,
    width: 75,
    height: 30,
    borderRadius: 5,
    marginTop: 20,
  },
  timeButtonMinute: {
    backgroundColor:'white',
    marginLeft: 7,
    width: 75,
    height: 30,
    borderRadius: 5,
    marginTop: 20,
  },
  dbButton: {
    backgroundColor:'white',
    width: 80,
    marginLeft: 150,
    height: 30,
    borderRadius: 5,
    marginTop: 20,
  },
  row: {
    flexDirection: 'row',
    marginTop: 30,
  },
  buttonText: {
    color: '#6554b8',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  labelText: {
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 20,
    marginRight: 10,
    marginTop: 20,
  },
  colonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 7,
    marginTop: 20,
  },
  labText: {
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: Platform.OS === 'ios' ? 35 : 40,
    marginTop: 20,
  },
  labelStyler: {
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontSize: Platform.OS === 'ios' ? 27 : 30,
    lineHeight: 30,
  },
  userScreenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userScreenTitle: {
    fontWeight: 'bold',
    fontStyle: 'normal',
    color: 'white',
    textAlign: 'center',
    fontSize: 40,
    padding: 20,
  },
  userScreenTextInput: {
    fontSize: 20,
    backgroundColor: 'lightgrey',
    marginLeft: 25,
    marginRight: 25,
    marginTop: 15,
    marginBottom: 15,
    textAlign: 'center',
  },
  userScreenButton: {
    borderWidth: 3,
    borderColor: '#6554b8',
    backgroundColor: 'white',
    marginLeft: 55,
    marginRight: 55,
    marginTop: 20,
  },
  userScreenText: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
  signUpAndLogin: {
    backgroundColor: '#816fde',
    marginLeft: 50,
    marginRight: 50,
  },
  returnHomeText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  groupPageLabelsText: {
    textAlign: 'left',
    marginLeft: 30,
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  groupPageLabelsMember: {
    textAlign: 'left',
    marginLeft: 30,
    color: 'white',
    fontSize: 20,
  },
  loginErrorMessage: {
    color: 'red',
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 5,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  groupTextBox: {
    height: 50,
    borderWidth: 3,
    borderColor: '#6554b8',
    backgroundColor: 'white',
    textAlign: 'center',
    marginTop: 50,
    marginLeft: 50,
    marginRight: 50,
  },
  groupButtons: {
    borderWidth: 3,
    borderColor: '#6554b8',
    backgroundColor: 'white',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 50,
    width: 160,
    height: 40,
  },
  groupButtonsText: {
    color: '#6554b8',
    fontWeight: 'bold',
    fontFamily: 'Montserrat-Light',
    fontSize: 25,
    textAlign: 'center',
  },
  pingText: {
    textAlign: 'left',
    marginLeft: 30,
    color: '#dedede',
    fontWeight: 'bold',
    fontSize: 20,
  },

});

export default Styles;
