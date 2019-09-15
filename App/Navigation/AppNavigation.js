import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from "react-navigation";
import React from "react";
import { Image } from "react-native";
import HomeScreen from "../Containers/HomeScreen";
import MapSearchScreen from "../Containers/MapSearchScreen";
import LaunchScreen from "../Containers/LaunchScreen";

import Images from "../Themes/Images";

import styles from "./Styles/NavigationStyles";

const TabNav = createBottomTabNavigator(
  {
    Perfil: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: () => (
          <Image
            source={Images.tabProfile}
            style={{
              width: 45,
              height: 45
            }}
          />
        )
      }
    },
    Explorar: {
      screen: MapSearchScreen,
      navigationOptions: {
        tabBarIcon: () => <Image source={Images.mapPin} />
      }
    }
  },
  {
    tabBarOptions: {
      showLabel: false,
      showIcon: true,
      tintColor: "#999",
      activeTintColor: "#aaa"
    }
  }
);

// Manifest of possible screens
const PrimaryNav = createStackNavigator(
  {
    HomeScreen: TabNav,
    LaunchScreen: { screen: LaunchScreen }
  },
  {
    // Default config for all screens
    headerMode: "none",
    initialRouteName: "HomeScreen",
    navigationOptions: {
      headerStyle: styles.header
    }
  }
);

export default createAppContainer(PrimaryNav);
