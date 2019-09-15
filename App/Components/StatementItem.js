import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import ElevatedView from "react-native-elevated-view";

import Images from "../Themes/Images";

import styles from "./Styles/StatementItemStyle";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class Components extends Component {
  render() {
    return (
      <ElevatedView elevation={2} style={styles.container}>
        <TouchableOpacity onPress={this.props.onPress}>
          <View style={styles.content}>
            <View style={{ flexDirection: "row" }}>
              <View style={styles.leftContainer}>
                <Image style={styles.imageContainer} source={this.props.uri} />
              </View>
              <View style={styles.middleContainer}>
                <Text style={styles.title}>{this.props.title}</Text>
                <Image
                  style={styles.ratingContainer}
                  source={Images.starRating}
                />
              </View>
            </View>
            <View style={styles.rightContainer}>
              <Text
                style={[
                  styles.percentNumber,
                  this.props.percent < 70
                    ? this.props.percent < 50
                      ? this.props.percent < 25
                        ? { color: "#212121" }
                        : { color: "#37474f" }
                      : { color: "#afb42b" }
                    : { color: "#4caf50" }
                ]}
              >
                {this.props.percent}%
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            height: 1,
            backgroundColor: "#e9ebef",
            marginBottom: 1
          }}
        />
      </ElevatedView>
    );
  }
}
