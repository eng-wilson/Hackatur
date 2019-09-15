import React, { Component } from "react";
import {
  ScrollView,
  Text,
  KeyboardAvoidingView,
  SafeAreaView,
  View
} from "react-native";
import { connect } from "react-redux";

import * as Animatable from "react-native-animatable";

import StatementListItem from "../Components/StatementItem";
import SugComp from "../Components/SugComp";
import Images from "../Themes/Images";
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from "./Styles/SuggestionScreenStyle";

class SuggestionScreen extends Component {
  render() {
    return (
      <SafeAreaView>
        <View>
          <Text style={styles.sessionTitle}>Encontre o ideal para você</Text>
        </View>
        <ScrollView>
          <Animatable.View animation="fadeInUpBig" delay={70}>
            <View style={styles.near}>
              <SugComp uri={Images.caninde} title={"Entretenimento"} />
              <SugComp uri={Images.caranguejo} title={"Gastronomia"} />
              <SugComp uri={Images.hotel} title={"Hospedagem"} />
              <SugComp uri={Images.cultura} title={"Cultura"} />
            </View>
          </Animatable.View>
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
)(SuggestionScreen);
