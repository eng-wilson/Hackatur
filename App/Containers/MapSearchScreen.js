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
import MapView from "react-native-maps";
import Geolocation from "@react-native-community/geolocation";
import * as Animatable from "react-native-animatable";
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import Images from "../Themes/Images";
// Styles
import styles from "./Styles/MapSearchScreenStyle";

class MapSearchScreen extends Component {
  render() {
    Geolocation.setRNConfiguration({
      latitude: -10.9296902,
      longitude: -37.109493
    });
    return (
      <SafeAreaView style={styles.mapContainer}>
        <View style={styles.mapContainer}>
          <Text>MapSearchScreen</Text>
          <Image source={Images.maps1} />

          <Text style={styles.sessionTitle}>Perto de você</Text>
          <ScrollView>
            <Animatable.View animation="fadeInUpBig" delay={1400}>
              <View style={styles.near}>
                <StatementList
                  data={_.get(this.props, "lastStatementEntries")}
                  onPressLast={() => navigation.navigate("StatementScreen")}
                />
              </View>
            </Animatable.View>
          </ScrollView>
        </View>
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
)(MapSearchScreen);
