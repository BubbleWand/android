import React, { Component } from 'react';
import {  Text, View, Button, ScrollView, TextInput, StyleSheet, Keyboard, TouchableOpacity, Dimensions, KeyboardAvoidingView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Egg } from '../../assets';

import Constants from 'expo-constants';
const statusBarHeight = Constants.statusBarHeight;


export default function EasterEgg(props) {
  return (
    <View style={styles.view}>
      <TouchableOpacity style={styles.backButton}
      onPress={ props.navigation.goBack
      }>
        <Icon name="arrow-left" size={28} color="#7D5FFF" />
      </TouchableOpacity>
      <Egg style={styles.egg} height={"100%"} width={"100%"}></Egg>
    </View>
  )
  
}


const styles = StyleSheet.create({
  view: {
    backgroundColor: 'white',
    marginTop: statusBarHeight,
    height: Dimensions.get('window').height ,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
  },  
  backButton: {
    width: '100%',
    height: 60,
    paddingLeft: 20,
    marginTop: 25,
  },
  egg: {
    justifyContent: 'flex-end', 
    alignItems: 'center' 
  }
})