import React from "react";
import { Image, View, Text, StyleSheet, ImageBackground } from "react-native";

export const CardInfo = ({ card = {} }) => {
  const {
    name = "Bump HQ",
    icon,
    photo = "../../images/gradient_default_card.png",
    location = "10514 Riviera Pl 98125",
    isOpenNow = true,
    keywords = ["lakehouse", "HQ", "Kayak"],
  } = card;
  return (
    <View style={styles.cardContainer}>
      <ImageBackground
        source={require("../../images/gradient_default_card.png")}
        imageStyle={{ borderRadius: 13 }}
        resizeMode="cover"
        style={styles.image}
      >
        <Text style={styles.title}>{name}</Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: 171,
    height: 274,
    borderRadius: 13,
    margin: 10,
  },
  cover: {
    padding: 20,
    backgroundColor: "white",
  },
  image: {
    flex: 1,
    justifyContent: "center",
    borderRadius: 13,
  },
  title: {
    color: "white",
    fontSize: 26,
    fontWeight: "bold",
    paddingLeft: 10,
  },
});
