import React, { useEffect, useRef, useState, useContext } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  ScrollView,
} from "react-native";
import { HomeCardInfo } from "../sharedComponents/HomeCardInfo";
import { CardsContext } from "../../services/cards/cards.context";
import { ActivityIndicator, Colors } from "react-native-paper";


export const HomeScreen = () => {
  /* 
  This is the main layout of the bumpCards screen
  */
  const { isLoading, error, homeCards } = useContext(CardsContext);
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
          flex: 1,
          alignItems: "center",
          paddingBottom: 50,
          backgroundColor: "white",
        }}
      >
        <Image
          style={styles.mainLogo}
          source={require("../../images/logo_bump_spellout.png")}
        />
      </View>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View
          style={{
            flex: 0.15,
            justifyContent: "center",
            alignItems: "center",
          }}
        ></View>
        <View style={{ flex: 0.05 }}></View>
        <View style={{ flex: 0.05 }}></View>
        <View
          style={{
            flex: 1,
            alignItems: "center",
          }}
        >
          {isLoading && (
            <View style={{ position: "absolute", top: "50%", left: "50%" }}>
              <ActivityIndicator
                size={50}
                style={{ marginLeft: -25 }}
                animating={true}
                color={Colors.amber300}
              />
            </View>
          )}
          <View style={{ flex: 1 }}>
            <FlatList
              data={homeCards}
              renderItem={({ item }) => {
                return <HomeCardInfo card={item} />;
              }}
              keyExtractor={(item) => item.description}
              contentContainerStyle={{ justifyContent: "center" }}
              decelerationRate={"fast"}
              //  snapToInterval={410} //This number is the height of the card + margin up and down
            />
          </View>
        </View>
        {/* <View style={styles.containerInsideScrollContainer}>{cards}</View> */}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screenTitle: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
  },
  streamsTitles: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 10,
    marginTop: 30,
  },
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
  title: {
    fontSize: 24,
    fontWeight: "600",
    color: "rgb(134, 100, 246)",
    marginTop: 20,
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
  root: {
    justifyContent: "center",
    alignItems: "center",
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
  usersContainer: {
    height: 90,
    flexDirection: "row",
    alignItems: "center",
  },
  userSquare: {
    height: 70,
    width: 70,
    backgroundColor: "blue",
    margin: 5,
    borderRadius: 10,
  },
  mainLogo: {
    width: 95,
    height: 33.77,
    resizeMode: "cover",
    marginBottom: 20,
    marginTop: 10,
  },
});
