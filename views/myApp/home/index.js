import React from 'react';
import { Image, View, ScrollView } from 'react-native';
import Post from './post';
import styles from '../../../styles';
import Statusbar from '../statusbar';

const data = require('./mockdata.json');

export default function Home({ navigation, route }) {
  return (
    <View>
      <Statusbar></Statusbar>
      <View style={styles.header}>
        <Image style={styles.headerImage} source={require('../../../assets/logo.png')} />
      </View>
      <ScrollView style={styles.posts} snapToAlignment='center'>
        {
          data.posts.map((post, i) => {
            return (<Post {...post} key={i} />)
          })
        }
      </ScrollView>
    </View>
  );

}

// use flatlist or sectionlist: https://reactnative.dev/docs/sectionlist

// scrollview
// snap to interval: https://reactnative.dev/docs/scrollview#snaptoalignment
