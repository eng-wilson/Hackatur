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
    width: Dimensions.get("window").width,
    fontSize: 30,
    backgroundColor: "#ff6600",
    color: "#fff",
    textAlign: "center"
  },
  near: {
    flex: 1,
    paddingBottom: 15
  },
  divisor: {
    flexDirection: "row",
    height: 1,
    backgroundColor: "#e9ebef"
  },
  input: {
    width: Dimensions.get("window").width - 20,
    height: 48,
    backgroundColor: "rgba( 0, 0, 0, 0.3 )",
    borderRadius: 28,
    paddingHorizontal: 25,
    color: "#fff",
    justifyContent: "center"
  }
});
