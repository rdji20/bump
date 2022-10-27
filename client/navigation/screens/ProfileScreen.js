import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React, { useEffect, useState } from "react";
import {
    Image,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    FlatList,
} from "react-native";
import * as RequestManager from "../../utils/RequestManager";
import Card from "../sharedComponents/card";
import { assets } from ".";
import ImageLoad from "react-native-image-placeholder";
import { colors } from "../../utils/colors";
import {
    ProfileCardLikes,
    ProfileInfo,
} from "../sharedComponents/ProfileCardsLikes";

export function ProfileScreen() {
    const Tab = createMaterialTopTabNavigator();

    [tabState, setTabState] = useState(false);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                <View style={styles.profileInfo}>
                    <View style={styles.profilePic}></View>
                </View>
                <View style={styles.interactionsBox}>
                    <ProfileInfo />
                </View>
                <View style={styles.likedCards}>
                    <View style={{ margin: 10 }}>
                        <Text>searchBar</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    likedCards: {
        flex: 1,
        // backgroundColor: "blue"
    },
    interactionsBox: {
        flex: 0.3,
        // backgroundColor: "green"
    },
    profileInfo: {
        flex: 0.5,
        alignItems: "center",
    },
    profilePic: {
        width: 100,
        height: 100,
        backgroundColor: "#202020",
        borderRadius: 50,
        marginTop: 20,
        marginBottom: 10,
    },
});
