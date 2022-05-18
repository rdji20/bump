import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export const AddNewPost = () => (
  <View style={styles.container}>
    <Header />
    {/* FormikPostUploader */}
  </View>
);

const Header = () => (
  <View style={styles.headerContainer}>
    <Text style={styles.headerText}>NEW CARD</Text>
    <Text></Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },

  headerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  headerText: {
    color: "#8664F6",
    fontWeight: "700",
    fontSize: 20,
    marginTop: 30,
  },
});

export default AddNewPost;
