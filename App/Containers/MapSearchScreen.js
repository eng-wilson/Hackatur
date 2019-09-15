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
import SearchInput from "react-native-search-filter";
import * as Animatable from "react-native-animatable";
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import Images from "../Themes/Images";
import StatementListItem from "../Components/StatementItem";
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
          <SearchInput
            placeholder={"Buscar"}
            style={styles.input}
            placeholderTextColor="#fff"
          />
          <Image source={Images.maps1} />

          <Text style={styles.sessionTitle}>Nas proximidades</Text>
          <View style={styles.divisor} />
          <ScrollView>
            <Animatable.View animation="fadeInUpBig" delay={70}>
              <View style={styles.near}>
                <StatementListItem
                  uri={Images.laCantini}
                  title={"La Cantina di Giovanni"}
                  onPress={() =>
                    this.props.navigation.navigate("LocalDetailsScreen")
                  }
                />
                <StatementListItem
                  uri={Images.acaiAju}
                  title={"Açaí Aju 24h"}
                />
                <StatementListItem
                  uri={Images.carraraFp}
                  title={"Carrara Food Park"}
                />
                <StatementListItem
                  uri={Images.barDeTapas}
                  title={"Bar de Tapas"}
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
