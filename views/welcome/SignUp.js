import React, { Component } from 'react';
import {  Text, View, Button, ScrollView, TextInput, StyleSheet, Keyboard, TouchableOpacity, Dimensions, KeyboardAvoidingView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { BubbleLogo } from '../../assets';
import DatePicker from 'react-native-datepicker'

import Constants from 'expo-constants';
const statusBarHeight = Constants.statusBarHeight;


export default class SignUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isFirst: true,
      username: '',
      password: '',
      confirmPassword: '',
      fullName: '',
      email: '',
      phone: '',
      date: '',
    }
  }

  
  render() {
    const { logIn } = this.props.route.params
    const { isFirst } = this.state
    // const [date, setDate] = useState(new Date())

    // console.log(date)
    return (

        
          <View style={styles.view} onPress= {()=> Keyboard.dismiss()}>
            <TouchableOpacity style={styles.backButton}
            onPress={() => {
              isFirst ? 
              this.props.navigation.goBack()
              :
              this.setState({ isFirst: !isFirst})
            }}>
              <Icon name="arrow-left" size={28} color="#7D5FFF" />
            </TouchableOpacity>
            <BubbleLogo height={"45%"} width={"45%"} style={styles.logo}/>
            { isFirst ? 
            <View style={styles.formOne}>
              <Text style={styles.loginText}>Create a Bubble account.</Text>
              <TextInput
                style={styles.input}
                placeholder="Full Name"
                placeholderTextColor="#84817a"
                onBlur={Keyboard.dismiss}
                value={this.state.fullName}
                onChangeText={(fullName) => this.setState({fullName})}
              />
              <TextInput
                style={styles.input}
                placeholder="Email Address"
                placeholderTextColor="#84817a"
                selectionColor='blue'
                onBlur={Keyboard.dismiss}
                value={this.state.email}
                onChangeText={(email) => this.setState({email})}
              />
              <TextInput
                style={styles.input}
                keyboardType={'phone-pad'}
                placeholder="Phone Number"
                placeholderTextColor="#84817a"
                selectionColor='blue'
                onBlur={Keyboard.dismiss}
                value={this.state.phone}
                onChangeText={(phone) => this.setState({phone})}
              />
              <DatePicker
                customStyles={{
                  dateInput: {
                    borderWidth: 0,
                    marginLeft: '-77%',
                  },              
                  placeholderText: {
                    color: '#84817a',
                    fontSize: 15,
                    width: '80%',
                    marginLeft:'66.5%',
                    },
                }}
                style={styles.input}
                date={this.state.date}
                showIcon={false} 
                placeholder="Birth Date" 
                mode="date" 
                format="M/DD/YYYY"
                onDateChange={(date) => { this.setState({ date: date }) }}
              ></DatePicker>         
              <TouchableOpacity style={styles.nextButton}
                onPress={() => {
                  this.setState({isFirst: !isFirst})
                }}>
                <Text style={styles.logInText}
                >Next</Text>
              </TouchableOpacity>
            </View>
            :
            <View style={styles.formTwo}>
              <Text style={styles.loginText}>Almost there...</Text>
               <TextInput
                style={styles.input}
                placeholder="Username"
                placeholderTextColor="#84817a"
                selectionColor='blue'
                onBlur={Keyboard.dismiss}
                value={this.state.username}
                onChangeText={(username) => this.setState({username})}
              />
              <TextInput
                secureTextEntry={true}
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#84817a"
                selectionColor='blue'
                onBlur={Keyboard.dismiss}
                value={this.state.password}
                onChangeText={(password) => this.setState({password})}
              />
                <TextInput
                secureTextEntry={true}
                style={styles.input}
                placeholder="ghghg"
                placeholderTextColor="#84817a"
                selectionColor='blue'
                onBlur={Keyboard.dismiss}
                value={this.state.password}
                onChangeText={(password) => this.setState({password})}
              />
              {/* <TextInput
                keyboardType={'default'}
                secureTextEntry={true}
                style={styles.input}
                placeholder="Confirm Password"
                placeholderTextColor="#84817a"
                selectionColor='blue'
                onBlur={Keyboard.dismiss}
                value={this.state.confirmPassword}
                onChangeText={(confirmPassword) => this.setState({confirmPassword})}
              /> */}

              <Text style={styles.legalText}>By signing up, you agree to the Terms of Service and Privacy Policy.</Text>
              <TouchableOpacity style={styles.logInButton}
            onPress={() => {
              logIn()
            }}>
            <Text style={styles.logInText}
             >Log In</Text>
          </TouchableOpacity>
            </View>
            }
        </View>
    )
  }
}


const styles = StyleSheet.create({
  view: {
    backgroundColor: 'white',
    marginTop: statusBarHeight,
    height: Dimensions.get('window').height ,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
  },  
  formOne: {
    width: '100%'
  },
  formTwo: {
    width: '100%'
  },
  backButton: {
    width: '100%',
    height: 60,
    paddingLeft: 20,
    marginTop: 25,
  },
  textInput: {
    width:'100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    fontSize: 15,
    height: 40,
    width: '80%',
    borderBottomWidth: 0.5,
    borderBottomColor: '#84817a',
    color: 'black',
    paddingLeft: '2%',
    marginLeft: '10%',
    marginBottom: 10,
  },
  loginText: {
    width: "100%",
    fontSize:23,
    fontWeight:'bold',
    marginLeft: 48,
    textAlign:"left",
    color:'black',
    marginBottom: 10,
  },
  legalText: {
    width: "80%",
    fontSize:14,
    justifyContent: "center",
    alignSelf: "center",
    // marginLeft: 48,
    // textAlign:"left",
    color:'black',
    marginBottom: 10,
  },
  logInButton: {
    marginTop: 20,
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    width: "80%",
    height: 45,
    backgroundColor:'#7D5FFF',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
  },
  nextButton: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
    width: "50%",
    height: 45,
    backgroundColor:'#7D5FFF',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    marginRight: '5%',
  },
  logInText: {
    color:'white',
    fontSize:20,
  },
  logo: {
    maxHeight: '20%',
    marginBottom: 70,
  }
})
