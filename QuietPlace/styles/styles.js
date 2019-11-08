import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8740ad',
    alignItems: 'center',
    justifyContent: 'center',
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
    backgroundColor: '#8740ad',
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
    backgroundColor:'lightgrey',
    marginLeft: 40,
    width: 100,
    height: 30,
    borderRadius: 5,
    marginTop: 20,
  },
  dbButton: {
    backgroundColor:'lightgrey',
    width: 100,
    marginLeft: 40,
    height: 30,
    borderRadius: 5,
    marginTop: 20,
  },
  row: {
    flexDirection: 'row',
    marginTop: 30,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    textAlignVertical: 'center',
  }, 
  labelText: {
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 40,
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
  userScreenTitle: {
    fontWeight: 'bold',
    fontStyle: 'normal',
    color: 'white',
    fontSize: 50
  }
});

export default Styles;