import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const BubbleStack = createStackNavigator();

import ShowBubble from '../bubbles/showBubble';
import Settings from '../bubbles/settings';

export default function Profile() {
  return(
    <BubbleStack.Navigator
      initialRouteName="Profile"
      mode="modal"
      headerMode="none"
      >
      <BubbleStack.Screen name="Profile" component={ShowBubble} initialParams={{
        type: 'profile',
      }} />
      <BubbleStack.Screen name="Settings" component={Settings} />
    </BubbleStack.Navigator>
  )
}