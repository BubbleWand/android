import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

// custom views
import Welcome from './views/welcome/welcome';
import MyApp from './views/myApp/index';

const Stack = createStackNavigator();

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedIn: false,
    }
    this.logIn = this.logIn.bind(this)
  }

  logIn(loggedIn) {
    console.log('here')
    this.setState({ loggedIn })
  }
  render() {
    const { loggedIn } = this.state
    const logIn = this.logIn;
    return (
      <NavigationContainer>
          <Stack.Navigator mode="modal" headerMode="none" >
            {loggedIn === false ? 
            <Stack.Screen name="Welcome" component={Welcome}  options={{ headerShown: false }} initialParams={{
              logIn: logIn,
            }}/>
            :
            <Stack.Screen name="MyApp" component={MyApp} initialParams={{
              logIn: logIn,
            }} />
            }
          </Stack.Navigator>
      </NavigationContainer>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems:'center'
  },
});

// Franklin was here