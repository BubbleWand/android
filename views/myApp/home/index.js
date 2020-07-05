import React, { Component } from 'react';
import { StyleSheet, Text, View,  } from 'react-native';

import Constants from 'expo-constants';
const statusBarHeight = Constants.statusBarHeight

export default class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <View style={styles.view}>
        <Text>HOME</Text>
      </View>
    )
  }
}

// use flatlist or sectionlist: https://reactnative.dev/docs/sectionlist

// scrollview
// snap to interval: https://reactnative.dev/docs/scrollview#snaptoalignment


const styles = StyleSheet.create({
  view: {
    paddingTop: statusBarHeight,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
})