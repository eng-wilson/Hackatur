import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    minHeight: 70,
    borderRadius: 10,
    paddingHorizontal: 15,
    justifyContent: "center",
    marginHorizontal: 5,
    marginBottom: 5,
    marginTop: 3
  },
  content: {
    flex: 1,
    width: Dimensions.get("window").width * 0.8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flexBasis: 0
  },
  middleContainer: {
    flexShrink: 1,
    width: 150
  },
  ratingContainer: {
    width: 125,
    height: 25
  },
  title: {
    color: "#333",
    fontSize: 18,
    lineHeight: 30,
    flexWrap: "wrap"
  },
  imageContainer: {
    width: 100,
    height: 100,
    margin: 10,
    borderRadius: 10
  },
  percentNumber: {
    fontWeight: "bold",
    fontSize: 20,
    marginRight: 10
  }
});
