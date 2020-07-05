import React from 'react';
import { Text, View, } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Home from './home/index';
import Bubbles from './bubbles/index';
import Add from './add/index';
import Map from './map/index';
import Profile from './profile/index';

const Tabs = createBottomTabNavigator();

function dummy() {
  return(
    <View>
      <Text>Hi</Text>
    </View>
  )
}
export default function MyApp() {
  return (
    <Tabs.Navigator 
      tabBarOptions={{
        activeTintColor: 'blue',
        activeBackgroundColor: 'black',
        inactiveBackgroundColor: 'black',
      }}
      mode="modal"

      >
      <Tabs.Screen name="Home" component={Home} />
      <Tabs.Screen name="Bubbles" component={Bubbles} />
      <Tabs.Screen name="Add" component={Add} />
      <Tabs.Screen name="Map" component={Map} />
      <Tabs.Screen name="Profile" component={Profile} />
    </Tabs.Navigator>
  )
};