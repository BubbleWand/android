import { StyleSheet } from "react-native";
import Constants from 'expo-constants';

const bubblePurple = "#6654B4";

const styles = StyleSheet.create({
  view: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    alignItems: "center"
  },
  welcome: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    width: "100%",
    maxHeight: "9%",
    backgroundColor: bubblePurple,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
  },
  headerText: {
    fontSize: 25,
    width: "75%",
    color: "white",
    textAlign: "center"
  },
  search: {
    zIndex: 1,
    height: 40,
    width: '100%',
    textAlign: 'center',
    padding: 0,
    fontSize: 20,
    borderWidth: 2,
    borderColor: 'grey'
  }
});

export default styles;