import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Home from './home/index';
import Bubbles from './bubbles/index';
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

export default function MyApp() {
  return (
    <Tabs.Navigator 
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Home") {
            return focused ? 
            <HomeActive height={size} width={size} /> 
            :
            <HomeInactive height={size} width={size} />
          } else if(route.name === "Bubbles"){
            return focused ? 
            <BubbleActive height={size} width={size} /> 
            :
            <BubbleInactive height={size} width={size} />
          } else if(route.name === "Add"){
            return focused ? 
            <PhotoActive height={size} width={size} /> 
            :
            <PhotoInactive height={size} width={size} />
          } else if(route.name === "Map"){
            return focused ? 
            <MapActive height={size} width={size} /> 
            :
            <MapInactive height={size} width={size} />
          } else if(route.name === "Profile"){
            return focused ? 
            <ProfileActive height={size} width={size} /> 
            :
            <ProfileInactive height={size} width={size} />
          }
        }
      })}
      tabBarOptions={{
        // activeTintColor: 'blue',
        activeBackgroundColor: 'white',
        inactiveBackgroundColor: 'white',
        showLabel: false,
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