import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import  Styles  from './styles/styles';
import firebase from 'react-native-firebase';
import Spinner from 'react-native-loading-spinner-overlay';

export default class userScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
      currentGroup: '',
      indicator: false,
    };
  }

  signOutButtonPressed = () => {
    firebase.auth().signOut()
    this.props.navigation.navigate('Loading')
  }

  loginButtonPressed = () => {
    this.props.navigation.navigate('UserLoginPage')
  }

  signUpButtonPressed = () => {
    this.props.navigation.navigate('UserSignUp')
  }

  groupButtonPressed = () => {
    this.props.navigation.navigate('GroupFind')
  }

  groupPageButtonPressed = () =>{
    this.props.navigation.navigate('DisplayGroup')
  }

  componentDidMount() {
    this.setState({indicator : true})
    const {currentUser} = firebase.auth()
    this.setState({currentUser})
    if(currentUser) {
      const userRef = firebase.database().ref('User').child(currentUser.uid)
      userRef.orderByChild('groupID').once('value', snapshot => {
				if (snapshot.exists()) {
          this.setState({currentGroup : snapshot.val().groupID})
          this.setState({indicator : false})
        }
        else {
          this.setState({indicator : false})
        }
      })
    }
    else {
      this.setState({currentGroup : ''})
      this.setState({indicator : false})
    }
  }

  render () {
    const {currentUser} = this.state
    const {currentGroup} = this.state
    const loginbutton = <TouchableOpacity style={Styles.userScreenButton}
                                                  onPress = {this.loginButtonPressed}>
                                  <Text style={Styles.groupButtonsText}>
                                    Login
                                  </Text>
                              </TouchableOpacity>
    const signupbutton = <TouchableOpacity style={Styles.userScreenButton}
                                                 onPress = {this.signUpButtonPressed}>
                                  <Text style={Styles.groupButtonsText}>
                                    Sign Up
                                  </Text>
                               </TouchableOpacity>
    const signoutbutton = <TouchableOpacity style={Styles.userScreenButton}
                                                  onPress = {this.signOutButtonPressed}>
                                  <Text style={Styles.groupButtonsText}>
                                    Sign Out
                                  </Text>
                                </TouchableOpacity>
    const groupbutton = <TouchableOpacity style={Styles.userScreenButton}
                                                  onPress = {this.groupButtonPressed}>
                                  <Text style={Styles.groupButtonsText}>
                                    Create or Join a Group
                                  </Text>
                                </TouchableOpacity>
    const groupPage = <TouchableOpacity style={Styles.userScreenButton}
                                                  onPress = {this.groupPageButtonPressed}>
                                  <Text style={Styles.groupButtonsText}>
                                    View Group
                                  </Text>
                          </TouchableOpacity>
    return (
      <View style={Styles.settingsContainer}>
        <Spinner
          visible={this.state.indicator}
          textContent={"Loading..."}
          textStyle={{color: 'white'}}
        />
        <Text style={Styles.userScreenTitle}>
          Welcome
        </Text>
        <Text style={Styles.userScreenText}>
          {currentUser && currentUser.email}
        </Text>

        {currentUser? signoutbutton : loginbutton}
        {currentGroup? groupPage : groupbutton}
      </View>
    );
  }
}
