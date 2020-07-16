import { StyleSheet, Dimensions } from "react-native";
import Constants from "expo-constants";
import bubbleColors from '../../../utils/bubbleColors';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);


const styles = StyleSheet.create({
  view: {
    backgroundColor: bubbleColors.purple
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
  postFile: {
    minWidth: screenWidth,
    height: screenHeight-64
  }
});

export default styles;