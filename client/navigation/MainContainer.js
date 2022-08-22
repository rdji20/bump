import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import {
  ExploreScreen,
  CommunityScreen,
  ProfileScreen,
  SearchSubscreen,
} from "./screens";
import { StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../utils/colors";

const Tab = createMaterialTopTabNavigator();

const MyTheme = {
  dark: true,
  colors: {
    primary: "black",
    background: colors.white,
  },
};

export function MyTabs() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Tab.Navigator
        initialRouteName="Explore"
        tabBarPosition="bottom"
        backBehavior="order"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name == "Explore") {
              iconName = focused ? "copy" : "copy-outline";
            } else if (route.name == "Community") {
              iconName = focused ? "share-social" : "share-social-outline";
            } else if (route.name == "Search") {
              iconName = focused ? "search" : "search-outline";
            } else {
              iconName = focused ? "person-circle" : "person-circle-outline";
            }
            return (
              <Ionicons
                style={styles.icons}
                size="large"
                name={iconName}
                size={30}
                color={color}
              />
            );
          },
          tabBarActiveTintColor: "#FE5845",
          tabBarInactiveTintColor: "#C4C4C4",
          tabBarShowLabel: false,
          tabBarStyle: styles.tabBar,
          tabBarIndicatorStyle: styles.tabBarIndicator,
        })}
      >
        <Tab.Screen name="Search" component={SearchSubscreen} />
        <Tab.Screen name="Explore" component={ExploreScreen} />
        <Tab.Screen name="Community" component={CommunityScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  icons: {
    width: 50,
    height: 50,
  },
  tabBar: {
    paddingBottom: 30,
    backgroundColor: "white",
  },
  tabBarIndicator: {
    backgroundColor: colors.orangeBump,
  },
});
