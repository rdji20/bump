import React from "react";
import { Image, View, Text, StyleSheet, ImageBackground } from "react-native";

export const ChooseCardInfo = ({ card = {} }) => {
  const {
    title = "Bump HQ",
    icon,
    description = "This is bump's first HQ when it was just a dream",
    linkImage = "../../images/gradient_default_card.png",
    location = "10514 Riviera Pl 98125",
    isOpenNow = true,
    keywords = ["lakehouse ", "HQ ", "Kayak "],
  } = card;

  return (
    <View style={styles.cardContainer}>
      <ImageBackground
        source={require("../../images/gradient_default_card.png")}
        imageStyle={{ borderRadius: 10 }}
        resizeMode="cover"
        style={styles.image}
      ></ImageBackground>
      <View style={{ flex: 0.4 }}>
        <Text numberOfLines={3} style={styles.title}>
          {title}
        </Text>
        <Text style={styles.keywordsText} numberOfLines={1}>
          {keywords}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: 180,
    height: 252,
    borderRadius: 8,
    margin: 5,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    borderRadius: 8,
  },
  title: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
    marginRight: 10,
  },
  keywordsText: {
    flex: 0.5,
    fontSize: 12,
    color: "black",
    marginLeft: 10,
    marginRight: 10,
  },
});
