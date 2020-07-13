import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Constants from 'expo-constants';
const statusBarHeight = Constants.statusBarHeight

const MONTHS = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const RAW = 
  {
    name: 'Doge Dudes',
    _id: 'id1',
    about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    photo: 'https://i.picsum.photos/id/1028/200/200.jpg?hmac=thf3cKyzvjBi3Rnf8-hvYRl8MmEPFPIq1G8nJVvoT4I',
    points: 500,
    tags: ['sports', 'music', 'movies', 'food', 'anime', 'gaming'],
    createdAt: new Date(),
    tansaction: 'Franklin: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    events: [
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
    ],
    members: [1, 1, 1, 1, 1, 1, 1, 1, 1,2, 3],
    location : {
      coordinates: [-122.406417, 37.785834]
    }
  }

export default class showBubble extends Component {
  constructor(props) {
    super(props)
    this.state = {
      params: props.route.params,
      data: null,
    }
    this.getData = this.getData.bind(this)
    this.getData()
  }

  getData() {
    this.state.data = RAW
  }
  render() {
    const { data } =  this.state;
    console.log(data.createdAt.getYear())
    if (data === null) {
      return(
      <View style={styles.container}>
        <Text>Loading</Text>
      </View>)
    }
    const {type} = this.props.route.params;
    return(
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.left}>
            <Image
              style={styles.image}
              source={{
                uri: data.photo
              }}
            />
            <Text ellipsizeMode="tail" numberOfLines={1} style={styles.name}>{data.name}</Text>
            <Text ellipsizeMode="tail" numberOfLines={1} style={styles.points}>{data.points}</Text>
          </View>
          <View style={styles.right}>
            {type === 'bubble' ? 
            <Text style={styles.stats}>{data.events.length} Events    {data.members.length} Members</Text>
            :
            <Text style={styles.stats}>{data.events.length} Events    {data.friends.length} Friends</Text>
            } 
            <View style={styles.info}>
              <View style={styles.infoField}>
                <Icon name="map-pin" size={15} color="#6654B4" />
                <Text style={styles.infoText}>San Francisco, CA</Text>
              </View>
              <View style={styles.infoField}>
                <Icon name="calendar-day" size={15} color="#6654B4" />
                <Text style={styles.infoText}>Bubbled {MONTHS[data.createdAt.getMonth()]}, {1900 + data.createdAt.getYear()}</Text>
              </View>
            </View>
            <Text style={styles.about} ellipsizeMode="tail" numberOfLines={4}>
              {data.about}
            </Text>
          </View>
        </View>
      </View>
    )
  }
  
}

const styles = StyleSheet.create({
  container: {
    marginTop: statusBarHeight,
    minHeight: '100%',
    maxWidth: '100%',
  },
  header: {
    maxHeight: 200,
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 0,
  },
  left: {
    maxWidth: '32%',
    minHeight: '93%',
    maxHeight: '93%',
    flex: 1,
    alignItems: 'center',
    paddingTop: 8,
  },
  right: {
    maxWidth: '62%',
    minHeight: '93%',
    maxHeight: '93%',
    flex: 1,
    flexDirection: 'column',
    alignItems: "flex-start",
    justifyContent: 'space-evenly',
    paddingLeft: '2%',
    paddingTop: 8,
  },
  name: {
    color: '#6654B4',
    fontSize: 14,
    fontWeight: '700',
    margin: 3,
  },
  image: {
    height: 120,
    width: 120,
    borderRadius: 60,
  },
  points: {
    fontSize: 8,
    maxHeight: 12,
    fontWeight: '400',
  },
  stats: {
    width: '98%',
    minHeight: '10%',
    maxHeight: '10%',
    fontSize: 13,
    fontWeight: '400',
    paddingLeft: 8,
  },
  info: {
    maxHeight: '10%',
    width: '98%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoField: {
    maxHeight: 20,
    width: '50%',
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: 'center',
  },
  infoText: {
    fontSize: 10,
    fontWeight: '500',
  },
  about: {
    width: '98%',
    maxHeight: '45%',
    paddingLeft: 8,
    fontSize: 13,
    fontWeight: '300',
  },
})