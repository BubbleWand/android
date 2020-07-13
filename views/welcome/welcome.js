import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, SafeAreaView, FlatList, Dimensions } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';



import Login from './Login'

const WelcomeStack = createStackNavigator();

export default function Welcome( props ) {
  const  {logIn} = props.route.params
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
      <BubbleLogo style={styles.welcomeLogo} height={"75%"} width={"75%"}></BubbleLogo>
      <Text style={styles.welcomeText}>Have fun</Text>
      <Text style={styles.welcomeText}>with your friends.</Text>
      <Text style={styles.welcomeText}>We'll take care of the rest. </Text>
      <View style={styles.signUpButton}>
        <Text style={styles.signUpText}
        onPress={() => {
          navigation.navigate('Login')
        }}>Create an Account</Text>
      </View>
      <View style={styles.loginBox}>
        <Text>Have an account? </Text>
        <Text
        fontSize = "24"
        style={styles.loginText}
        onPress={() => {
          navigation.navigate('Login')
        }}>
          Log In
        </Text>
      </View>
     

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

const styles = StyleSheet.create({
  welcome: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  
  },
  welcomeText: {
    bottom:"18%",
    width: "100%",
    fontSize:23,
    fontWeight:'bold',
    marginLeft: 113,
    textAlign:"left",
  },
  welcomeLogo: {
    bottom:"9%",
  },
  loginText: {
    color:'#7D5FFF',
  },
  signUpText: {
    color:'white',
    fontSize:20,
  },
  loginBox: {
    width:"100%",
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center",
    paddingTop:15,
    borderTopWidth: 0.5,
    borderStyle:'solid',
    borderColor:'black',
  },
  signUpButton: {
    bottom:"15%",
    justifyContent: "center",
    alignItems: "center",
    width: "75%",
    height: 45,
    backgroundColor:'#7D5FFF',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  }
})