import React from "react";
import { Image, View, Text, StyleSheet, ImageBackground } from "react-native";

export const SharedCardsInfo = ({ card = {} }) => {
  const {
    title = "Bump HQ",
    icon,
    description = "This is bump's first HQ when it was just a dream",
    linkImage = "../../images/gradient_default_card.png",
    location = "10514 Riviera Pl 98125",
    isOpenNow = true,
    keywords = ["lakehouse ", "HQ ", "Kayak "],
    day = "Monday",
  } = card;

  return (
    <View style={styles.cardContainer}>
      <ImageBackground
        source={require("../../images/gradient_default_card.png")}
        imageStyle={{ borderRadius: 26 }}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={{ flex: 1 }}>
          {/* <View style={{ flex: 1 }}></View> */}
          <View style={{ flex: 1 }}>
            <Text numberOfLines={5} style={styles.title}>
              {title}
            </Text>
            <Text style={styles.keywordsText} numberOfLines={1}>
              {keywords}
            </Text>
          </View>
        </View>
        <View style={{ flex: 0.25 }}>
          <View style={styles.interactions}></View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: 400,
    height: 400,
    borderRadius: 10,
    margin: 5,
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    borderRadius: 26,
    flexDirection: "row",
  },
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 20,
    flex: 1,
  },
  interactions: {
    // backgroundColor: "black",
    flex: 1,
    borderRadius: 30,
  },
  keywordsText: {
    flex: 0.5,
    fontSize: 18,
    color: "white",
    marginLeft: 20,
  },
});
