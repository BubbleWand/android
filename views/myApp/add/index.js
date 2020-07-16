import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import HomeInactive from '../../../assets/tab-bar/home-active.svg'
import { statusBarHeight } from 'expo-constants';

export default class Add extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <View style={styles.view}>
        <HomeInactive width={120} height={120} />
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