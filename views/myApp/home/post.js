import React from 'react';
import { View, Text } from 'react-native';
import styles from '../../../styles';

export default function Post({ author, likes, comments }) {
  return (
    <View style={styles.post}>
      <Text>{author.displayName}</Text>
    </View>
  )
}