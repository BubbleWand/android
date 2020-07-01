import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, SafeAreaView, FlatList, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Constants from 'expo-constants';
const statusBarHeight = Constants.statusBarHeight

const WelcomeStack = createStackNavigator();

export default function Welcome() {
  return (
    <WelcomeStack.Navigator
      initialRouteName="Home">
      <WelcomeStack.Screen name="Home" component={WelcomeScreen} />
      <WelcomeStack.Screen name="Signup" component={SignupScreen} />
      <WelcomeStack.Screen name="Login" component={LoginScreen} />
    </WelcomeStack.Navigator>
  )
}

function WelcomeScreen({navigation}) {
  return(
    <View>
      <Text>Welcome</Text>
      <Button
        title="Signup"
        onPress={() => {
          navigation.navigate('Signup')
        }}
        />
      <Button
        title="Login"
        onPress={() => {
          navigation.navigate('Login')
        }}
        />
    </View>
  )
}

function SignupScreen({ navigation }) {
  return (
    <View>
      <Text>SIGNUP</Text>
    </View>
  )
}

function LoginScreen({ navigation }) {
  return (
    <View>
      <Text>Login</Text>
    </View>
  )
}