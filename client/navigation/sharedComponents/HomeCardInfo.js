import React from "react";
import { Image, View, Text, StyleSheet, ImageBackground } from "react-native";

export const HomeCardInfo = ({ card = {} }) => {
  const {
    id = 12,
    name = "Bump HQ",
    icon,
    description = "This is bump's first HQ when it was just a dream",
    photo = "../../images/gradient_default_card.png",
    location = "10514 Riviera Pl 98125",
    isOpenNow = true,
    keywords = ["lakehouse", "HQ", "Kayak"],
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
          <View style={{ flex: 1 }}></View>
          <Text style={styles.title}>{name}</Text>
        </View>
        <View style={{ flex: 0.2 }}>
          <View style={styles.interactions}></View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: 356,
    height: 562,
    borderRadius: 13,
    margin: 10,
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
    fontSize: 30,
    fontWeight: "bold",
    paddingLeft: 10,
    marginLeft: 10,
    flex: 1,
  },
  interactions: {
    backgroundColor: "black",
    flex: 1,
    borderRadius: 26,
  },
});
