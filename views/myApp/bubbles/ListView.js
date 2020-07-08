import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Constants from 'expo-constants';
const statusBarHeight = Constants.statusBarHeight

import InnerTree from '../../../utils/Tree';

const RAW = [
  {
    name: 'bubble 1',
    _id: 'id1',
    photo: 'https://i.picsum.photos/id/1028/200/200.jpg?hmac=thf3cKyzvjBi3Rnf8-hvYRl8MmEPFPIq1G8nJVvoT4I',
    points: 500,
  },
  {
    name: 'bubble 2',
    _id: 'id2',
    photo: 'https://i.picsum.photos/id/204/200/300.jpg?hmac=XxKpmfmEwzuLIP4_ji37Ql6leTx-j6LTtl8wNK3JTYY',
    points: 24121,
  },
  {
    name: 'bubble 3',
    _id: 'id3',
    photo: 'https://i.picsum.photos/id/386/200/300.jpg?hmac=gk-J08Ib-URM0-Sv_pgzVkWrFR5_B7R3dvHWKfy93FU',
    points: 123,
  }
]

export default class ListView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search: "",
      data: [],
      raw: RAW,
      showSearch: false,
      tri: {},
    }
  }

  updateData(search){
    const { raw } = this.state;
    const tri = new InnerTree(raw.map((item) => item.name));
    console.log(tri.complete(''))
    // const data = raw.map((bubble, index) => {

    // })
  }

  render() {
    const { showSearch } = this.state;
    return(
      <View style={styles.view}>
        <View style={styles.header}>
          <Icon style={styles.icon} name="search" size={30} color="white" onPress={() => {
            this.setState(prevState => ({
              showSearch: !prevState.showSearch
            }));
          }} />
          <Text style={styles.headerText}>Bubbles</Text>
          <Icon style={styles.icon} name="plus" size={26} color="white" onPress={() => {console.log('hi')}}/>
        </View>
        {showSearch ?
          <TextInput
            style={styles.search}
            placeholder="search"
            onBlur={Keyboard.dismiss}
            value={this.state.password}
            onChangeText={(search) => {
              this.setState({search})
              this.updateData(search);
            }}
          />
          :
          <></>
        }
        <View style={styles.body}>
          <Text>Container</Text>
        </View>
      </View>
    )
  }
}



const styles = StyleSheet.create({
  view: {
    paddingTop: statusBarHeight,
    flex: 1,
    alignItems: 'center'
  },
  header: {
    width: "100%",
    maxHeight: '9%',
    backgroundColor: '#6654B4',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
  headerText: {
    fontSize: 25,
    width: '75%',
    color: 'white',
    textAlign: 'center',
    // fontFamily: 'Helvetica',
  },
  search: {
    zIndex: 1,
    height: 40,
    width: '100%',
    textAlign: 'center',
    padding: 0,
    fontSize: 20,
    borderWidth: 2,
    borderColor: 'grey',
  }
})