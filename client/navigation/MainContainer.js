import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { CommunityScreen, ProfileScreen } from "./screens";
import { StyleSheet, Text, Pressable } from "react-native";
import { colors } from "../utils/colors";
import { HomeScreen } from "./screens/HomeScreen";
import { CardsContextProvider } from "../services/cards/cards.context";
import { CardDetailsScreen } from "./screens/CardDetailsScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
    AntDesign,
    MaterialIcons,
    Ionicons,
    Entypo,
    MaterialCommunityIcons,
    FontAwesome,
} from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";

const Tab = createMaterialTopTabNavigator();
const BottomTab = createBottomTabNavigator();

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
            <BottomTab.Navigator
                initialRouteName="Home"
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        if (route.name == "Home") {
                            return (
                                <AntDesign
                                    style={styles.icons}
                                    name={"home"}
                                    size={26}
                                    color={color}
                                />
                            );
                        } else if (route.name == "Community") {
                            return (
                                <MaterialCommunityIcons
                                    style={styles.icons}
                                    name={"timeline-outline"}
                                    size={24}
                                    color={color}
                                />
                            );
                        } else if (route.name == "Search") {
                            iconName = focused ? "search" : "search-outline";
                        } else {
                            iconName = focused
                                return (
                                <AntDesign
                                    style={styles.icons}
                                    name={"user"}
                                    size={24}
                                    color={color}
                                />
                                )
                        }
                        return (
                            <AntDesign
                                style={styles.icons}
                                size="medium"
                                name={iconName}
                                size={30}
                                color={color}
                            />
                        );
                    },
                    tabBarActiveTintColor: "white",
                    tabBarInactiveTintColor: "grey",
                    tabBarShowLabel: false,
                    tabBarStyle: styles.tabBar,
                    tabBarIndicatorStyle: styles.tabBarIndicator,
                    headerShown: false,
                })}
            >
                <BottomTab.Screen
                    name="Community"
                    component={CommunityScreen}
                />
                <BottomTab.Screen name="Home" component={HomeStackNavigator} />
                <BottomTab.Screen name="Profile" component={ProfileScreen} />
            </BottomTab.Navigator>
        </NavigationContainer>
    );
}

const HomeStack = createStackNavigator();

function HomeStackNavigator() {
    return (
        <HomeStack.Navigator initialRouteName="HomeStackScreen">
            <HomeStack.Screen
                name="HomeStackScreen"
                component={HomeScreen}
                options={{ headerShown: false, title: "Home"}}
            />
            <HomeStack.Screen
                name="DetailsScreen"
                component={CardDetailsScreen}
                options={{title: ""}}
            />
        </HomeStack.Navigator>
    );
}

const styles = StyleSheet.create({
    tabBar: {
        paddingBottom: 20,
        backgroundColor: "black",
    },
    tabBarIndicator: {
        backgroundColor: colors.orangeBump,
    },
});
