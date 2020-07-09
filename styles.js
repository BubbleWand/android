import { StyleSheet } from "react-native";
import Constants from "expo-constants";

const bubbleColors = {
  "purple": "#6654B5",
  "darkPurple": "#4B53B5",
  "blue": "#5AE0ED",
  "darkBlue": "#004165"
}

const styles = StyleSheet.create({
  statusBar: {
    height: Constants.statusBarHeight + 10,
    backgroundColor: bubbleColors.darkBlue
  },
  view: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
    alignItems: "center"
  },
  welcome: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  header: {
    width: "100%",
    height: 64,
    backgroundColor: bubbleColors.purple,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 10,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    marginTop: -10
  },
  headerImage: {
    width: 48,
    height: 48
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
    width: "100%",
    textAlign: "center",
    padding: 0,
    fontSize: 20,
    borderWidth: 2,
    borderColor: "grey"
  },
  posts: {
    height: Constants.height,
    width: "100%"
  },
  post: {
    maxHeight: 600
  },
  horizontalScroll: {
    width: "100%",
    height: "100%"
  },
  viewPager: {
    flex: 1,
    height: "100%"
  },
  postHeader: {
    position: 'absolute',
    zIndex: 1,
    margin: 15
  },
  postHeaderUsername: {
    color: "white",
    fontWeight: "bold",
  },
  postHeaderTime: {
    color: "white"
  },
  postFile: {
    width: "100%",
    height: "100%"
  }
});

export default styles;