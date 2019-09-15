import { StyleSheet, Dimensions } from "react-native";
import { ApplicationStyles } from "../../Themes/";

export default StyleSheet.create({
  imageContainer: {
    width: Dimensions.get("window").width
  },
  ratingContainer: {
    width: 125,
    height: 25
  },
  container: {
    flex: 1,
    flexShrink: 1
  },
  titleContainer: {
    margin: 15
  },
  title: {
    color: "#333",
    fontSize: 32,
    lineHeight: 34,
    flexWrap: "wrap"
  },
  divisor: {
    flexDirection: "row",
    height: 1,
    backgroundColor: "#e9ebef",
    marginBottom: 1
  },
  tagsContainer: {
    marginTop: 20,
    flexDirection: "row"
  },
  buttonStyle: {
    height: 45,
    width: 215,
    borderRadius: 10,
    backgroundColor: "#ff6600",
    justifyContent: "center",
    margin: 20
  },
  buttonTitle: {
    color: "#fff",
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: "bold"
  },
  tagBackground: {
    borderRadius: 5,
    justifyContent: "center",
    padding: 4
  },
  lateNight: {
    backgroundColor: "#9575cd"
  },
  confort: {
    backgroundColor: "#8c9eff"
  },
  casual: {
    backgroundColor: "#2196f3"
  },
  description: {
    fontSize: 18
  }
});
