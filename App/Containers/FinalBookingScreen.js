import React, { Component } from "react";
import {
  ScrollView,
  Text,
  KeyboardAvoidingView,
  SafeAreaView,
  View
} from "react-native";
import { connect } from "react-redux";
import { QRCode } from "react-native-custom-qr-codes";
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from "./Styles/FinalBookingScreenStyle";

class FinalBookingScreen extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <Text style={styles.description}>Reserva efetuada com sucesso!</Text>
          <Text style={styles.description}>O código da sua reserva é:</Text>
          <Text style={styles.code}>2UF893Y</Text>

          <QRCode size={180} />
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
)(FinalBookingScreen);
