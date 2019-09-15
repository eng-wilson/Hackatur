import React, { Component } from "react";
import {
  ScrollView,
  Text,
  KeyboardAvoidingView,
  SafeAreaView
} from "react-native";
import { connect } from "react-redux";
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from "./Styles/LocalDetailsScreenStyle";

class LocalDetailsScreen extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView style={styles.container}>
          <KeyboardAvoidingView behavior="position">
            <Text>LocalDetailsScreen</Text>
          </KeyboardAvoidingView>
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
)(LocalDetailsScreen);
