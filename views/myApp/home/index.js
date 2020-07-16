import React from 'react';
import { 
  View, 
  StyleSheet,
  ScrollView, 
  StatusBar, 
  Dimensions, 
  RefreshControl 
} from 'react-native';
import Post from './post';
import styles from './styles';


const screenHeight = Math.round(Dimensions.get('window').height);

const data = require('./mockdata.json');

const wait = (timeout) => {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}

export default function Home() {

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <View style={styles.view}>
      <ScrollView 
        style={styles.posts} 
        decelerationRate={0}
        snapToInterval={screenHeight - 64}
        snapToAlignment='center'
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl 
            refreshing={refreshing} 
            onRefresh={onRefresh} 
            title="Pull to refresh"
            tintColor="#fff"
            titleColor="#fff"
          />
        }
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