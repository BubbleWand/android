import React from 'react';
import { View, Text, Image } from 'react-native';
import Moment from 'react-moment';
import styles from '../../../styles';
import ViewPager from '@react-native-community/viewpager';

export default function Post({ author, createdAt, files, likes, comments }) {
  return (
    <View style={ styles.post }>
      <View style={ styles.postHeader }>
        <Text style={ styles.postHeaderUsername }>{author.username}</Text>
        <Moment style={styles.postHeaderTime} element={Text} fromNow>
          { createdAt }
        </Moment>
      </View>
      <View style={ styles.horizontalScroll }>
        <ViewPager style={styles.viewPager} initialPage={0}>
          {
            files.map((file, i) => {
              return (
              <View key={i}>
                <Image source={{uri: file}} style={styles.postFile} />
              </View>
              )
            })
          }
        </ViewPager>
      </View>
    </View>
  )
}