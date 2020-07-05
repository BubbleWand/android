import React, { Component } from 'react';
import { StyleSheet, Text, View,  } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Constants from 'expo-constants';
import { TouchableHighlight } from 'react-native-gesture-handler';
const statusBarHeight = Constants.statusBarHeight

export default class Bubbles extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <View style={styles.view}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Bubbles</Text>
          <Icon style={styles.icon} name="plus" size={26} color="white" onPress={() => {console.log('hi')}}/>
          </View>
        <View style={styles.body}>
          <Text>Container</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  view: {
    paddingTop: statusBarHeight,
    flex: 1,
    alignItems: 'center'
  },
  header: {
    width: "100%",
    maxHeight: '9%',
    backgroundColor: '#6654B4',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 25,
    width: '75%',
    borderColor: 'black',
    borderWidth: 2,
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Helvetica',
  },
  icon: {
    borderColor: 'red',
    borderWidth: 2,
    marginRight: 25,
  }
})