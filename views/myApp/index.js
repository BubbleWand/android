import React from 'react';
import { Text, View, Image} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Home from './home/index';
import Bubble from './bubbles/index';
import Add from './add/index';
import Map from './map/index';
import Profile from './profile/index';

const Tabs = createBottomTabNavigator();

// Icons
import {
  BubbleActive,
  BubbleInactive,
  HomeActive,
  HomeInactive,
  MapActive,
  MapInactive,
  PhotoActive,
  PhotoInactive,
  ProfileActive,
  ProfileInactive
} from '../../assets/tab-bar/index';

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
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Home") {
            return focused ? 
            <HomeActive height={size*1.4} width={size*1.4} /> 
            :
            <HomeInactive height={size*1.4} width={size*1.4} />
          } else if(route.name === "Bubbles"){
            return focused ? 
            <BubbleActive height={size*1.4} width={size*1.4} /> 
            :
            <BubbleInactive height={size*1.4} width={size*1.4} />
          } else if(route.name === "Add"){
            return focused ? 
            <PhotoActive height={size*1.4} width={size*1.4} /> 
            :
            <PhotoInactive height={size*1.4} width={size*1.4} />
          } else if(route.name === "Map"){
            return focused ? 
            <MapActive height={size*1.4} width={size*1.4} /> 
            :
            <MapInactive height={size*1.4} width={size*1.4} />
          } else if(route.name === "Profile"){
            return focused ? 
            <ProfileActive height={size*1.4} width={size*1.4} /> 
            :
            <ProfileInactive height={size*1.4} width={size*1.4} />
          }
        }
      })}
      tabBarOptions={{
        activeBackgroundColor: 'white',
        inactiveBackgroundColor: 'white',
        showLabel: false,
      }}
      mode="modal"
      >
      <Tabs.Screen name="Home" component={Home} />
      <Tabs.Screen name="Bubbles" component={Bubble} />
      <Tabs.Screen name="Add" component={Add} />
      <Tabs.Screen name="Map" component={Map} />
      <Tabs.Screen name="Profile" component={Profile} />
    </Tabs.Navigator>
  )
};