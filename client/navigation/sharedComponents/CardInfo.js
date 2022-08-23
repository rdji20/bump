import React from "react";
import { Image, View, Text, StyleSheet } from "react-native";

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
      <Text>{name}</Text>
      {/* <Image source={require(photo)} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: 171,
    height: 274,
  },
});
