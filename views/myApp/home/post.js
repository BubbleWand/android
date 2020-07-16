import React from 'react';
import { View, ScrollView, Text, Image, Dimensions } from 'react-native';
import Moment from 'react-moment';
import styles from './styles';

const screenWidth = Math.round(Dimensions.get('window').width);

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
        <ScrollView 
          horizontal= {true}
          decelerationRate={0}
          snapToInterval={screenWidth} //your element width
          snapToAlignment={"center"}
        >
          {
            files.map((file, i) => {
              return (
                <Image source={{ uri: file }} style={styles.postFile} key={i} />
              )
            })
          }
        </ScrollView>
      </View>
    </View>
  )
}