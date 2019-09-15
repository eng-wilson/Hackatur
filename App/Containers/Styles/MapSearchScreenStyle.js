import { StyleSheet, Dimensions } from "react-native";
import { ApplicationStyles } from "../../Themes/";

export default StyleSheet.create({
  map: {
    flex: 1,
    width: Dimensions.get("window").width * 0.9,
    height: Dimensions.get("window").height * 0.5
  },
  container: {
    flex: 1
  },
  mapContainer: {
    justifyContent: "center",
    alignItems: "center"
  },
  sessionTitle: {
    fontSize: 34
  },
  near: {
    paddingBottom: 15
  }
});
