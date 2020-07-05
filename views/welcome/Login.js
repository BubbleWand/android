import React, { Component } from 'react';
import {  Text, View, Button, ScrollView, TextInput, StyleSheet, Keyboard } from 'react-native';

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
        <TextInput
          style={styles.input}
          placeholder="Username"
          onBlur={Keyboard.dismiss}
          value={this.state.username}
          onChangeText={(username) => this.setState({username})}
        />
        <TextInput
          style={styles.input}
          placeholder="password"
          onBlur={Keyboard.dismiss}
          value={this.state.password}
          onChangeText={(password) => this.setState({password})}
        />
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Go Back"
        />
        <Button
          onPress={() => {
            logIn()
          }}
          title="Login"
        />
      </View>
    )
  }
}


const styles = StyleSheet.create({
  view: {
    marginTop: statusBarHeight,
    backgroundColor: 'purple',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    fontSize: 15,
    height: '4%',
    width: '60%',
    backgroundColor: 'grey',
    paddingLeft: '2%',
  }
})
