import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import bubbleColors from '../../../utils/bubbleColors';

import Constants from 'expo-constants';
const statusBarHeight = Constants.statusBarHeight

export default class Settings extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: props.route.params.id,
    }
  }
  render() {
    return(
      <View style={styles.container}>
        <View style={styles.navbar}>
          <TouchableWithoutFeedback onPress={() => {this.props.navigation.goBack()}} >
            <View style={styles.back}>
              <Icon name="arrow-left" size={25} color="white" />
              <Text style={styles.backText}>Back</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
        <Text>{this.props.route.params.id}</Text>
      </View>
    )
  }
  
}

const styles = StyleSheet.create({
  container: {
    minHeight: '100%',
    maxWidth: '100%',
    marginTop: statusBarHeight,
  },
  navbar: {
    width: '100%',
    maxHeight: 50,
    flex: 1,
    paddingLeft: 18,
    paddingRight: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: bubbleColors.purple,
  },
  back: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    minWidth: 75,
    maxWidth: 75,
  },
  backText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '300',
  },
})