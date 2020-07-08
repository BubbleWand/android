import React from 'react';
import { Text, View, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login';
import styles from '../../styles';

const WelcomeStack = createStackNavigator();

export default function Welcome(props) {
  const  { logIn } = props.route.params
  return (
    <WelcomeStack.Navigator
      initialRouteName="Home"
      mode="modal"
      screenOptions={{
        headerStyle: {
          backgroundColor: 'purple',
        },
        headerStatusBarHeight: '200px'
      }}
      >
      <WelcomeStack.Screen name="Home" component={WelcomeScreen} options={{ headerShown: false }} />
      <WelcomeStack.Screen 
        name="Signup" 
        component={Login} 
        initialParams={{
          logIn: logIn,
        }}
        options={{ 
          headerShown: false 
        }}/>
      <WelcomeStack.Screen 
        name="Login" 
        component={Login} 
        options={{ headerShown: false }}
        initialParams={{
          logIn: logIn ,
        }}/>
    </WelcomeStack.Navigator>
  )
}

function WelcomeScreen({ navigation}) {
  return(
    <View style={styles.welcome}>
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

function SignupScreen({ route,  navigation }) {
  const parentNav = route.params.nav.navigation
  console.log('route', parentNav)
  return (
    <View>
      <Button
        title="take to myapp"
        onPress={() => {
          parentNav.navigate("MyApp")
        }} />
    </View>
  )
}