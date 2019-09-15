import { StyleSheet, Dimensions } from "react-native";
import { ApplicationStyles } from "../../Themes/";

export default StyleSheet.create({
  near: {
    flex: 1,
    paddingBottom: 15
  },
  sessionTitle: {
    width: Dimensions.get("window").width,
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: "#ff6600"
  }
});
