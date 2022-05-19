import React from "react";
import { StyleSheet, View } from "react-native";

export default function Card(props) {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>{props.children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexShrink: 1,
    justifyContent: "flex-start",
    alignContent: "flex-start",

    width: 150,
    height: 150,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "#202020",
    elevation: 3,
    backgroundColor: "#fff",
    shadowOffset: { width: 3, height: 4 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 3,
    marginVertical: 6,
  },
  cardContent: {
    //flexWrap: 'wrap'
    //flexShrink: 1
    //justifyContent: 'flex-start',
    //alignContent: 'center',
    //alignContent: 'center'
    //marginHorizontal: 10,
    //marginVertical: 30
  },
});
