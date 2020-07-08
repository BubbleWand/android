import React from 'react';
import { View, StatusBar } from 'react-native';
import styles from '../../styles';


export default function Statusbar() {
  return (
    <View style={styles.statusBar}>
      <StatusBar translucent barStyle="light-content"></StatusBar>
    </View>
  );
}