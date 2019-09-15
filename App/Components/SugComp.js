import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import ElevatedView from "react-native-elevated-view";

import Images from "../Themes/Images";

import styles from "./Styles/SugCompStyles";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class Components extends Component {
  render() {
    return (
      <ElevatedView elevation={2} style={styles.container}>
        <TouchableOpacity onPress={this.props.onPress}>
          <View style={styles.content}>
            <Image style={styles.imageContainer} source={this.props.uri} />
            <Text style={styles.title}>{this.props.title}</Text>
          </View>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            height: 1,
            backgroundColor: "#e9ebef"
          }}
        />
      </ElevatedView>
    );
  }
}
