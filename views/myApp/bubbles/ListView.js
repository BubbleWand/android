import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Keyboard, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Constants from 'expo-constants';
const statusBarHeight = Constants.statusBarHeight

import InnerTree from '../../../utils/Tree';
import { FlatList } from 'react-native-gesture-handler';

const RAW = [
  {
    name: 'bubble 1kajsngjasbngkjasbglkjabnsglnaslansg',
    _id: 'id1',
    photo: 'https://i.picsum.photos/id/1028/200/200.jpg?hmac=thf3cKyzvjBi3Rnf8-hvYRl8MmEPFPIq1G8nJVvoT4I',
    points: 500,
    tansaction: 'Franklin: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
  },
  {
    name: 'bob',
    _id: 'id2',
    photo: 'https://i.picsum.photos/id/204/200/300.jpg?hmac=XxKpmfmEwzuLIP4_ji37Ql6leTx-j6LTtl8wNK3JTYY',
    points: 24121,
    transaction: 'Zach added a new event.'
  },
  {
    name: 'bat',
    _id: 'id3',
    photo: 'https://i.picsum.photos/id/386/200/300.jpg?hmac=gk-J08Ib-URM0-Sv_pgzVkWrFR5_B7R3dvHWKfy93FU',
    points: 123,
    transaction: 'Hayden: incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quisksjgnakjans sagnjajlsng asjnfas g sanjfas ngalsj gsagnl sagfnlasmgnogsaln'
  },
  {
    name: 'bubble 1',
    _id: 'id4',
    photo: 'https://i.picsum.photos/id/1028/200/200.jpg?hmac=thf3cKyzvjBi3Rnf8-hvYRl8MmEPFPIq1G8nJVvoT4I',
    points: 500,
    transaction: 'Neil: Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium...'
  },
  {
    name: 'bob',
    _id: 'id5',
    photo: 'https://i.picsum.photos/id/204/200/300.jpg?hmac=XxKpmfmEwzuLIP4_ji37Ql6leTx-j6LTtl8wNK3JTYY',
    points: 24121,
    transaction: "Troy: Who's ready for economics?"
  },
  {
    name: 'bat',
    _id: 'id6',
    photo: 'https://i.picsum.photos/id/386/200/300.jpg?hmac=gk-J08Ib-URM0-Sv_pgzVkWrFR5_B7R3dvHWKfy93FU',
    points: 123,
    transaction: "Troy: Who's ready for economics?"
  },
  {
    name: 'bubble 1',
    _id: 'id7',
    photo: 'https://i.picsum.photos/id/1028/200/200.jpg?hmac=thf3cKyzvjBi3Rnf8-hvYRl8MmEPFPIq1G8nJVvoT4I',
    points: 500,
    transaction: "Troy: Who's ready for economics?"
  },
  {
    name: 'bob',
    _id: 'id8',
    photo: 'https://i.picsum.photos/id/204/200/300.jpg?hmac=XxKpmfmEwzuLIP4_ji37Ql6leTx-j6LTtl8wNK3JTYY',
    points: 24121,
    transaction: "Troy: Who's ready for economics?"
  },
  {
    name: 'bat',
    _id: 'id9',
    photo: 'https://i.picsum.photos/id/386/200/300.jpg?hmac=gk-J08Ib-URM0-Sv_pgzVkWrFR5_B7R3dvHWKfy93FU',
    points: 123,
    transaction: "Troy: Who's ready for economics?"
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
            data={data}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, index }) => {
              const photo = item.photo
              return (
                <TouchableOpacity style={styles.list} onPress={()=> {
                  this.props.navigation.navigate('Bubble', {
                    id: item._id,
                  })
                }}>
                  {/* <View style={styles.list}> */}
                    <Image
                      style={styles.image}
                      source={{
                        uri: photo
                      }}
                    />
                      <View style={styles.right}>
                        <View style={styles.innerLeft}> 
                          <View style={styles.title}>
                            <Text ellipsizeMode="tail" numberOfLines={1} style={styles.bubbleName}>{item.name}</Text>
                            <Text style={styles.bubblePoints}>{item.points}</Text>
                          </View>
                          <Text ellipsizeMode="tail" numberOfLines={3} style={styles.transaction}>{item.transaction}</Text>
                        </View>
                        <TouchableOpacity style={styles.innerRight} onPress={() => console.log('bubble Up')}>
                          <Text>a</Text>
                        </TouchableOpacity>
                      </View>

                  {/* </View> */}
                </TouchableOpacity>
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
    minHeight: '9%',
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
    width: '100%'
  },
  container: {
    width: '95%',
    minHeight: '80%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  list: {
    minWidth: '100%',
    minHeight: 110,
    borderBottomWidth: 1,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  image: {
    width: '22%',
    height: 85,
    borderRadius: 50,
    marginRight: 25,
  },
  right: {
    borderWidth: 1,
    borderColor: 'red',
    height: 90,
    minWidth: '70%',
    paddingTop: 6,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  innerLeft: {
    width: '70%',
    height: '95%',
  },
  title: {
    flex: 1,
    maxWidth: '100%',
    flexDirection: 'row',
    maxHeight: '40%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderColor: 'black',
    borderWidth: 1,
  },
  bubbleName: {
    fontSize: 20,
    fontWeight: '600',
    margin: 0,
    maxWidth: '70%',
    overflow: "hidden",
    borderColor: 'green',
    borderWidth: 1,
    marginRight: 10,
  },
  bubblePoints: {
    fontSize: 8,
    maxHeight: 12,
    fontWeight: '400',
    padding: 0,
    alignSelf: 'flex-end',
    marginBottom: 3,
  },
  transaction: {
    marginTop: 5,
    fontSize: 10,
    fontWeight: '400',
    overflow: "hidden",
    height: '60%'
  },
  innerRight: {
    width: '25%',
    height: '95%',
    borderWidth: 1,
    borderColor: 'orange',
  }
})