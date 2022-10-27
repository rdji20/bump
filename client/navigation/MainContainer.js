import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { CommunityScreen, ProfileScreen } from "./screens";
import { StyleSheet, Text, Pressable } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../utils/colors";
import { HomeScreen } from "./screens/HomeScreen";
import { CardsContextProvider } from "../services/cards/cards.context";

const Tab = createMaterialTopTabNavigator();

const MyTheme = {
    dark: true,
    colors: {
        primary: "black",
        background: "white",
    },
};

export function MyTabs() {
    return (
        <NavigationContainer theme={MyTheme}>
            <Tab.Navigator
                initialRouteName="Home"
                tabBarPosition="bottom"
                backBehavior="order"
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        if (route.name == "Home") {
                            iconName = focused
                                ? "home-outline"
                                : "home-outline";
                        } else if (route.name == "Community") {
                            iconName = focused
                                ? "people-outline"
                                : "people-outline";
                        } else if (route.name == "Search") {
                            iconName = focused ? "search" : "search-outline";
                        } else {
                            iconName = focused
                                ? "person-outline"
                                : "person-outline";
                        }
                        return (
                            <Ionicons
                                style={styles.icons}
                                size="medium"
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
                <Tab.Screen name="Community" component={CommunityScreen} />
                <Tab.Screen name="Home" component={HomeScreen} />
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
