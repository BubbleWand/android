import { StyleSheet, Dimensions } from "react-native";
import Constants from "expo-constants";
import bubbleColors from '../../../utils/bubbleColors';

const statusBarHeight = Constants.statusBarHeight

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);


const styles = StyleSheet.create({
  view: {
    backgroundColor: bubbleColors.purple,
    marginTop: statusBarHeight,
  },
  post: {
    height: screenHeight-64
  },
  horizontalScroll: {
    width: "100%",
    height: "100%"
  },
  postHeader: {
    position: 'absolute',
    zIndex: 1,
    marginLeft: 15,
    marginTop: Constants.statusBarHeight
  },
  postHeaderUsername: {
    color: "white",
    fontWeight: "bold",
  },
  postHeaderTime: {
    color: "white"
  },
  textShadow: {
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 7,
    padding: 2
  },
  postFile: {
    minWidth: screenWidth,
    height: screenHeight-64
  }
});

export default styles;