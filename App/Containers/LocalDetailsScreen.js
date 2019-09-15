import React, { Component } from "react";
import {
  ScrollView,
  Text,
  KeyboardAvoidingView,
  SafeAreaView,
  Image,
  View
} from "react-native";
import { connect } from "react-redux";
import ElevatedView from "react-native-elevated-view";
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import Images from "../Themes/Images";
// Styles
import styles from "./Styles/LocalDetailsScreenStyle";
import { TouchableOpacity } from "react-native-gesture-handler";

class LocalDetailsScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Image style={styles.imageContainer} source={Images.laCantini} />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>La Cantina di Giovanni</Text>
          <Image style={styles.ratingContainer} source={Images.starRating} />
        </View>
        <View style={styles.divisor} />
        <ScrollView style={{ marginLeft: 20, marginRight: 20, marginTop: 15 }}>
          <Text style={styles.description}>
            Restaurante italiano com diversas massas e destaque aos molhos de
            frutos do mar, bebidas e clima familiar.
          </Text>
          <View style={styles.tagsContainer}>
            <View style={[styles.tagBackground, styles.lateNight]}>
              <Text style={{ color: "#fff" }}>Comida tarde da noite</Text>
            </View>
            <View
              style={[
                { marginLeft: 10, marginRight: 10 },
                styles.tagBackground,
                styles.confort
              ]}
            >
              <Text style={{ color: "#fff" }}>Aconchegante</Text>
            </View>
            <View style={[styles.tagBackground, styles.casual]}>
              <Text style={{ color: "#fff" }}>Casual</Text>
            </View>
          </View>
        </ScrollView>
        <View style={styles.divisor} />
        <TouchableOpacity
          hitSlop={{ top: 10, bottom: 10, left: 0, right: 0 }}
          style={{ alignItems: "center" }}
          onPress={() => this.props.navigation.navigate("FinalBookingScreen")}
        >
          <ElevatedView elevation={12} style={styles.buttonStyle}>
            <Text style={styles.buttonTitle}>Efetuar reserva</Text>
          </ElevatedView>
        </TouchableOpacity>
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
