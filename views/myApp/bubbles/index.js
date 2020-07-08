import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

const BubbleStack = createStackNavigator();

import ListView from './listView';
import NewBubble from './newBubble';
import showBubble from '../../../components/bubble/index';

export default function Bubble() {
  return(
    <BubbleStack.Navigator
      initialRouteName="Home"
      mode="modal"
      headerMode="none"
      >
      <BubbleStack.Screen name="Home" component={ListView} />
      <BubbleStack.Screen name="New" component={NewBubble} />
      <BubbleStack.Screen name="Bubble" component={showBubble} />
    </BubbleStack.Navigator>
  )
}