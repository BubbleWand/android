import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import HomeInactive from '../../../assets/tab-bar/home-active.svg'
import styles from '../../../styles';

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
