import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import Constants from 'expo-constants';
const statusBarHeight = Constants.statusBarHeight

export default class showBubble extends Component {
  constructor(props) {
    super(props)
    this.state = {
      params: props.route.params
    }
  }

  render() {
    console.log(this.state.params)
    return(
      <View style={styles.container}>
        <Text>qgx</Text>
      </View>
    )
  }
  
}

const styles = StyleSheet.create({
  container: {
    marginTop: statusBarHeight,
  }
})