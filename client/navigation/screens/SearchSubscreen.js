import React, { useEffect, useState } from "react";
import {
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Text,
  View,
} from "react-native";
import { Searchbar, TextInput } from "react-native-paper";
import { colors } from "../../utils/colors";
import { CardInfo } from "../sharedComponents/CardInfo";

export function SearchSubscreen() {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.searchBar}>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </View>
      <ScrollView contentContainerStyle={styles.searchShowcase}>
        <CardInfo />
        <CardInfo />
        <CardInfo />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  searchShowcase: {
    flex: 1,
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    flexWrap: "wrap",
  },
  container: {
    flex: 1,
  },
  searchBar: {
    padding: 10,
  },
  button: {
    flex: 1,
    backgroundColor: "black",
  },
  inputSearch: {
    flex: 1,
  },
});
