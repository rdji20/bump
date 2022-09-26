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
        imageStyle={{ borderRadius: 26 }}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1 }}></View>
          <View style={{ flex: 1 }}>
            <Text numberOfLines={3} style={styles.title}>
              {title}
            </Text>
            <Text style={styles.keywordsText} numberOfLines={1}>
              {keywords}
            </Text>
          </View>
        </View>
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
  image: {
    flex: 1,
    justifyContent: "center",
    borderRadius: 13,
  },
  title: {
    color: "white",
    fontSize: 26,
    fontWeight: "bold",
    marginLeft: 10,
    marginRight: 10,
  },
  keywordsText: {
    flex: 0.5,
    fontSize: 18,
    color: "white",
    marginLeft: 10,
    marginRight: 10,
  },
});
