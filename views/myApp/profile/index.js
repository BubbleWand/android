import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const BubbleStack = createStackNavigator();

import ShowBubble from '../bubbles/showBubble';
import Settings from './settings';

export default function Profile(props) {
  console.log(props)
  const {logIn} = props.route.params
  return(
    <BubbleStack.Navigator
      initialRouteName="Profile"
      mode="modal"
      headerMode="none"
      >
      <BubbleStack.Screen name="Profile" component={ShowBubble} initialParams={{
        type: 'profile',
      }} />
      <BubbleStack.Screen name="Settings" component={Settings} initialParams={{
        logIn: logIn,
      }}/>
    </BubbleStack.Navigator>
  )
}