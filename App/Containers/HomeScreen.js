import React, { Component } from "react";
import {
  ScrollView,
  Text,
  KeyboardAvoidingView,
  SafeAreaView,
  View,
  Image
} from "react-native";
import { connect } from "react-redux";
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from "./Styles/HomeScreenStyle";
import Images from "../Themes/Images";

class HomeScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.backgroundAvatar}>
          <View style={styles.containerAvatar}>
            <Image
              source={Images.userTest}
              style={styles.avatar}
              resizeMode={"contain"}
            />
          </View>
        </View>
        <ScrollView style={styles.backgroundContent}>
          <Text>Teste</Text>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
