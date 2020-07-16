import React, { Component } from 'react';
import {  Text, View, Button, ScrollView, TextInput, StyleSheet, Keyboard, TouchableOpacity,TouchableWithoutFeedback, KeyboardAvoidingView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { BubbleLogo } from '../../assets';

import Constants from 'expo-constants';
const statusBarHeight = Constants.statusBarHeight;


export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
    }
  }

  
  render() {
    const { logIn } = this.props.route.params
    return (
      <View style={styles.view}>
        <TouchableOpacity style={styles.backButton}
        onPress={() => this.props.navigation.goBack()}>
          <Icon name="arrow-left" size={30} color="#7D5FFF" />
        </TouchableOpacity>
        <BubbleLogo style={styles.loginLogo} height={"40%"} width={"40%"}></BubbleLogo>
        <View style={styles.textInput}>
          <Text style={styles.loginText}>Log in to Bubble.</Text>

          <TextInput
            style={styles.input}
            placeholder="Username"
            placeholderTextColor="#84817a"
            onBlur={Keyboard.dismiss}
            value={this.state.username}
            onChangeText={(username) => this.setState({username})}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#84817a"
            selectionColor='blue'
            onBlur={Keyboard.dismiss}
            value={this.state.password}
            onChangeText={(password) => this.setState({password})}
          />
          <TouchableOpacity style={styles.logInButton}
          onPress={() => {
            logIn()
          }}>
            <Text style={styles.logInText}
          >Log In</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  view: {
    marginTop: statusBarHeight,
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100%'
  },
  textInput: {
    width:'100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom:390,
  },
  input: {
    fontSize: 15,
    height: 40,
    width: '80%',
    borderBottomWidth: 0.5,
    borderBottomColor: '#84817a',
    color: 'black',
    paddingLeft: '2%',

  },
  loginLogo: {
    position:"absolute",
    top:10,
  },
  loginText: {
    bottom:10,
    width: "100%",
    fontSize:23,
    fontWeight:'bold',
    marginLeft: 100,
    textAlign:"left",
    color:'black',
  },
  logInButton: {
    position:'absolute',
    bottom:-60,
    justifyContent: "center",
    alignItems: "center",
    width: "75%",
    height: 45,
    backgroundColor:'#7D5FFF',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
  },
  logInText: {
    color:'white',
    fontSize:20,
  },
  backButton: {
    bottom: 350,
    marginLeft: -330,
  }
})
