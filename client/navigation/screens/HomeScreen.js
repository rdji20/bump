import { Entypo, Feather, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  FlatList,
} from "react-native";
import { colors } from "../../utils/colors";
import { HomeCardInfo } from "../sharedComponents/HomeCardInfo";

export const HomeScreen = () => {
  /* 
  This is the main layout of the bumpCards screen
  */

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <View
        style={{
          flex: 0.1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          style={styles.mainLogo}
          source={require("../../images/logo_bump_spellout.png")}
        />
      </View>
      <View style={{ flex: 0.05 }}>
        <Text>Filters</Text>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: "center",
        }}
      >
        <FlatList
          data={[
            { description: 1 },
            { description: 2 },
            { description: 3 },
            { description: 4 },
            { description: 5 },
            { description: 6 },
            { description: 7 },
          ]}
          style={{ paddingBottom: 55 }}
          renderItem={() => <HomeCardInfo />}
          keyExtractor={(item) => item.description}
          contentContainerStyle={{}}
          snapToAlignment={"start"}
          decelerationRate={"fast"}
          snapToInterval={590}
          disableScrollViewPanResponder={true}
        />
      </View>
      {/* <View style={styles.containerInsideScrollContainer}>{cards}</View> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  descriptionContainer: {
    width: "80%",
  },
  searchButton: {
    position: "absolute",
    right: 30,
  },

  containerInsideScrollContainer: {
    marginTop: 10,
  },

  logoPosition: {
    flex: 1,
    width: "100%",
    marginBottom: 20,
    alignItems: "flex-start",
    marginBottom: 50,
    marginTop: 0,
    flexDirection: "row",
  },

  mainLogo: {
    width: 95,
    height: 33.77,
    resizeMode: "cover",
    marginBottom: 20,
  },
  scrollContainer: {
    marginTop: "10%",
    width: "90%",
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
  activeTab: {
    color: colors.orangeBump,
    fontWeight: "bold",
    fontSize: 18,
    textDecorationColor: "#FE5845",
  },
  tabs: {
    fontSize: 18,
    fontWeight: "500",
    color: "black",
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    color: "rgb(134, 100, 246)",
  },
  text: {
    fontSize: 14,
    color: "rgb(255, 255, 255)",
    paddingVertical: 8,
    paddingRight: 20,
  },
  titleText: {
    fontSize: 28,
    color: "rgb(255, 255, 255)",
    fontWeight: "bold",
    paddingVertical: 5,
  },
  nameText: {
    fontSize: 30,
    color: "rgb(255, 255, 255)",
    fontWeight: "bold",
    paddingVertical: 5,
  },
  buttonIcons: {
    paddingVertical: 12,
  },
  contentIcons: {
    paddingRight: 5,
    paddingTop: 8,
  },
  root: {
    justifyContent: "center",
    alignItems: "center",
  },
  title_sb: {
    width: "100%",
    marginTop: 20,
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: "10%",
  },
  searchBar: {
    height: 37,
    width: 313,
    borderRadius: 50,
    zIndex: 3,
  },
  searchBarInput: {
    fontSize: 12,
  },
  cardInfoContainer: {
    marginBottom: 20,
    position: "relative",
  },
  cardImage: {
    width: "100%",
    height: 570,
    resizeMode: "cover",
    borderRadius: 20,
  },
});
