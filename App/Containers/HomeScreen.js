import React, { Component } from "react";
import {
  ScrollView,
  Text,
  KeyboardAvoidingView,
  SafeAreaView,
  View,
  Image
} from "react-native";
import ElevatedView from "react-native-elevated-view";
import { connect } from "react-redux";
import * as Animatable from "react-native-animatable";
import { TouchableOpacity } from "react-native-gesture-handler";
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
  Starred2,
  Starred3,
  Starred4,
  Starred5,
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

          <View style={{ marginTop: 20, marginBottom: 20 }}>
            <Text
              style={{
                fontSize: 26,
                textAlign: "center",
                color: "#ff6600",
                fontWeight: "bold"
              }}
            >
              Meu Perfil
            </Text>
          </View>

          <ScrollView>
            <View style={{ justifyContent: "center" }}>
              <Animatable.View>
                <Title>Casual: 67%</Title>
                <Starred />
                <Title>Aventureiro: 23%</Title>
                <Starred2 />
                <Title>Ecoturista: 6%</Title>
                <Starred3 />
                <Title>Cultural: 3%</Title>
                <Starred4 />
                <Title>Negócios: 1%</Title>
                <Starred5 />
              </Animatable.View>
            </View>
          </ScrollView>
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
