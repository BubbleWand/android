import React from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';
import Constants from "expo-constants";
import bubbleColors from "../../utils/bubbleColors";


export default function Statusbar(props) {
  return (
    <View style={
      props.type === "modal" ? { 
        height: Constants.statusBarHeight,
        backgroundColor: bubbleColors.darkPurple 
      } : {
        height: Constants.statusBarHeight,
        backgroundColor: bubbleColors.purple
      }
    }>
      <StatusBar translucent barStyle="light-content"></StatusBar>
    </View>
  );
}