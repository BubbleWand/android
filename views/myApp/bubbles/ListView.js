import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Keyboard} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Constants from 'expo-constants';
const statusBarHeight = Constants.statusBarHeight

import InnerTree from '../../../utils/Tree';
import { FlatList } from 'react-native-gesture-handler';

const RAW = [
  {
    name: 'bubble 1',
    _id: 'id1',
    photo: 'https://i.picsum.photos/id/1028/200/200.jpg?hmac=thf3cKyzvjBi3Rnf8-hvYRl8MmEPFPIq1G8nJVvoT4I',
    points: 500,
  },
  {
    name: 'bob',
    _id: 'id2',
    photo: 'https://i.picsum.photos/id/204/200/300.jpg?hmac=XxKpmfmEwzuLIP4_ji37Ql6leTx-j6LTtl8wNK3JTYY',
    points: 24121,
  },
  {
    name: 'bat',
    _id: 'id3',
    photo: 'https://i.picsum.photos/id/386/200/300.jpg?hmac=gk-J08Ib-URM0-Sv_pgzVkWrFR5_B7R3dvHWKfy93FU',
    points: 123,
  }
]

export default class ListView extends Component {
  constructor(props) {
    super(props)
    const newRaw = {}
    for (let item of RAW) {
      newRaw[item.name] = item
    }
    this.state = {
      search: "",
      data: RAW,
      raw: newRaw,
      showSearch: false,
      tri: {},
    }
  }

  updateData(search){
    const { raw } = this.state;
    let data;
    if (search === "") {
      data = Object.values(raw)
    } else {
      search = search.toLowerCase();
      const tri = new InnerTree(Object.keys(raw));
      const s = tri.complete(search)
      data = s.map((item, index) => {
        return raw[item]
      })
    }
    console.log("data",data)
    this.setState({data})
  }

  render() {
    const { showSearch, data } = this.state;
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
        <View style={styles.container}>
          <FlatList
            style={styles.flatlist}
            data={data}
            renderItem={({ item, index }) => {
              return (
                <View style={styles.list}>
                  <Text>{item.name}</Text>
                </View>
              )
            }}
            keyExtractor={item => item['_id']}
            />
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
  },
  body: {
    minHeight: '80%',
    borderColor: 'black',
    borderWidth: 2,
    width: '100%'
  },
  container: {
    width: '100%',
  }
})