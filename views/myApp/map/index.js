import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from '../../../styles';

export default class Map extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <View style={styles.view}>
        <Text>MAP</Text>
      </View>
    )
  }
}