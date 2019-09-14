import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from "react-navigation";
import HomeScreen from "../Containers/HomeScreen";
import MapSearchScreen from "../Containers/MapSearchScreen";
import LaunchScreen from "../Containers/LaunchScreen";

import styles from "./Styles/NavigationStyles";

const TabNav = createBottomTabNavigator({
  Perfil: HomeScreen,
  Explorar: MapSearchScreen
});

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
