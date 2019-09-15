import { StyleSheet } from "react-native";
import { ApplicationStyles } from "../../Themes/";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  description: {
    fontSize: 22
  },
  code: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#ff6600",
    textTransform: "uppercase"
  }
});
