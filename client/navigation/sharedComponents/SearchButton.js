import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const SearchButton = (props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <Text>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    width: 30,
    height: 20,
  },
});
