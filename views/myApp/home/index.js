import React from 'react';
import { View, ScrollView, StatusBar, Dimensions } from 'react-native';
import Post from './post';
import styles from './styles';

const screenHeight = Math.round(Dimensions.get('window').height);

const data = require('./mockdata.json');


export default function Home() {
  return (
    <View style={styles.view}>
      <StatusBar hidden />
      <ScrollView 
        style={styles.posts} 
        decelerationRate={0}
        snapToInterval={screenHeight - 64}
        snapToAlignment='center'
        showsVerticalScrollIndicator={false}
      >
        {
          data.posts.map((post, i) => {
            return (<Post {...post} key={i} />)
          })
        }
      </ScrollView>
    </View>
  );
}