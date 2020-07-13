import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const BubbleStack = createStackNavigator();


import ListView from './listView';
import NewBubble from './newBubble';
import ShowBubble from './showBubble';
import Settings from './settings'

export default function Bubble() {
  return(
    <BubbleStack.Navigator
      initialRouteName="Home"
      mode="modal"
      headerMode="none"
      >
      <BubbleStack.Screen name="Home" component={ListView} />
      <BubbleStack.Screen name="New" component={NewBubble} />
      <BubbleStack.Screen name="Bubble" component={ShowBubble} initialParams={{
        type: 'bubble',
      }} />
      <BubbleStack.Screen name="Settings" component={Settings} />
    </BubbleStack.Navigator>
  )
}