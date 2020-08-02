import React, { Component } from 'react';
import {  Text, View, Button, ScrollView, TextInput, StyleSheet, Keyboard, TouchableOpacity, Dimensions, TouchableWithoutFeedback } from 'react-native';
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
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={{height: '100%', width: '100%'}}>
          <View style={styles.view}>
            <TouchableOpacity style={styles.backButton}
            onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-left" size={28} color="#7D5FFF" />
            </TouchableOpacity>
            <BubbleLogo height={"45%"} width={"45%"} style={styles.logo}></BubbleLogo>
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
      </TouchableWithoutFeedback>
    )
  }
}


const styles = StyleSheet.create({
  view: {
    backgroundColor: 'white',
    marginTop: statusBarHeight,
    height: Dimensions.get('window').height ,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
  },  
  backButton: {
    width: '100%',
    height: 60,
    paddingLeft: 20,
    marginTop: 25,
  },
  textInput: {
    width:'100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    fontSize: 15,
    height: 40,
    width: '80%',
    borderBottomWidth: 0.5,
    borderBottomColor: '#84817a',
    color: 'black',
    paddingLeft: '2%',
    marginBottom: 10,
  },
  loginText: {
    width: "100%",
    fontSize:23,
    fontWeight:'bold',
    marginLeft: 100,
    textAlign:"left",
    color:'black',
    marginBottom: 10,
  },
  logInButton: {
    marginTop: 20,
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
  logo: {
    maxHeight: '20%',
    marginBottom: 70,
  }
})
