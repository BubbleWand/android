import React, { Component } from 'react';
import { StyleSheet, Text, View,  } from 'react-native';

import Constants from 'expo-constants';
const statusBarHeight = Constants.statusBarHeight

export default class Add extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <View style={styles.view}>
        <Text>ADD</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  view: {
    paddingTop: statusBarHeight,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});