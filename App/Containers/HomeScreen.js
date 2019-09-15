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
import {
  Container,
  Header,
  Avatar,
  Name,
  Bio,
  Stars,
  Starred,
  OwnerAvatar,
  Info,
  Title,
  Author
} from "./Styles/HomeScreenStyle";
import Images from "../Themes/Images";

class HomeScreen extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Container>
          <Header>
            <Avatar source={Images.userTest} />
            <Name>Wilson Carvalho</Name>
            <Bio>Viajante</Bio>
            <Bio>22 anos</Bio>
          </Header>
        </Container>
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
