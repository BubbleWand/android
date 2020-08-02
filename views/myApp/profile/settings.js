import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
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
    const {logIn} = this.props.route.params
    return(
      <View style={styles.container}>
        <View style={styles.navbar}>
          <TouchableWithoutFeedback onPress={() => {this.props.navigation.goBack()}} >
            <View style={styles.back}>
              <Icon name="arrow-left" size={25} color="white" />
              <Text style={styles.backText}></Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
        <Text>{this.props.route.params.id}</Text>
        <TouchableOpacity style={styles.signOutButton}
            onPress={() => {
                logIn(false)
            }}>
            <Text style={styles.signOutText}
             >Sign Out</Text>
          </TouchableOpacity>
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
  signOutText: {
    color:'white',
    fontSize:20,
  },
  signOutButton: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    width: "75%",
    height: 45,
    backgroundColor:'#7D5FFF',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
  },
})