import color from "color";
import React from "react";
import { Button } from "react-native";
import {
    Text,
    SafeAreaView,
    FlatList,
    ScrollView,
    StyleSheet,
    StatusBar,
    View,
    Image,
} from "react-native";
import { colors } from "../../utils/colors";
// import { createStackNavigator } from '@react-navigation/stack';

// const Stack = createStackNavigator();

export const CommunityScreen = () => {
    return (
        <SafeAreaView>
            <View style={styles.header}>
                <Text style={styles.pageTitle}>Activity</Text>
                <Button title="create card" />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    sectionNames: {
        color: colors.eerieBlack,
        marginLeft: 20,
        paddingBottom: 10,
        fontSize: 18,
        paddingTop: 20,
    },
    header: {
        justifyContent: "center",
    },
    item: {
        backgroundColor: "#202020",
        width: 165,
        height: 220,
        borderRadius: 10,
        margin: 10,
    },
    pageTitle: {
        fontSize: 28,
        fontWeight: "bold",
    },
    groupsCoontainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: "600",
        color: "rgb(134, 100, 246)",
        marginTop: 20,
    },
});
