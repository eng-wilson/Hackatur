import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    minHeight: 70,
    borderRadius: 10,
    justifyContent: "center",
    marginBottom: 5,
    marginTop: 3
  },
  content: {
    flex: 1,
    width: Dimensions.get("window").width,
    alignItems: "center",
    marginTop: 20
  },
  rightContainer: {
    flexShrink: 1
  },
  ratingContainer: {
    width: 125,
    height: 25
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    lineHeight: 30,
    flexWrap: "wrap",
    position: "absolute",
    textAlign: "center"
  },
  imageContainer: {
    width: 370,
    height: 200,
    borderRadius: 10
  }
});
