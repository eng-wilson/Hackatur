import { StyleSheet, Platform } from "react-native";
import { ApplicationStyles } from "../../Themes/";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ef6c00"
  },
  backgroundAvatar: {
    flexDirection: "row",
    justifyContent: "center"
  },
  containerAvatar: {
    width: 150,
    height: 150,
    backgroundColor: "#fff",
    borderRadius: 150 / 2,
    justifyContent: "center",
    alignItems: "center"
  },
  avatar: {
    width: 148,
    height: 148,
    borderRadius: Platform.OS === "android" ? 148 : 148 / 2
  },
  backgroundContent: {
    flex: 1,
    marginTop: 20,
    backgroundColor: "#fff"
  }
});
