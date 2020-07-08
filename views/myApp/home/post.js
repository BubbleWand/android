import React from 'react';
import { Text } from 'react-native';

export default function Post({ author, likes, comments }) {
  return <Text>{author.displayName}</Text>
}