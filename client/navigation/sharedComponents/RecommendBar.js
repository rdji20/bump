import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import { colors } from "../../utils/colors";

export const RecommenderBar = () => {
  return (
    <View>
      <TextInput
        style={styles.searchBar}
        label='Recommend me.. "lake activites"'
      ></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: colors.orangeBump,
  },
  searchBar: {
    height: 37,
    width: 313,
    borderRadius: 50,
    zIndex: 3,
  },
});
