import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import Post from './post';
import styles from '../../../styles';

const data = require('./mockdata.json');

export default function Home({ navigation, route }) {
  return (
    <View style={styles.view}>
      <View style={styles.header}>
        <Text style={styles.headerText}>logo</Text>
      </View>
      <ScrollView>
        {
          data.posts.map((post, i) => {
            return (<Post {...post} />)
          })
        }
      </ScrollView>
    </View>
  );

}

// use flatlist or sectionlist: https://reactnative.dev/docs/sectionlist

// scrollview
// snap to interval: https://reactnative.dev/docs/scrollview#snaptoalignment
