import React, { useEffect, useState } from "react";
import {
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  FlatList,
} from "react-native";
import { Searchbar, TextInput } from "react-native-paper";
import { colors } from "../../utils/colors";
import { CardInfo } from "../sharedComponents/CardInfo";
import { cardsRequestCurrentCity } from "../../services/cards/cards.service";

export function SearchSubscreen() {
  const [searchQuery, setSearchQuery] = React.useState("");
  cardsRequestCurrentCity;
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
      <FlatList
        data={[
          { description: 1 },
          { description: 2 },
          { description: 3 },
          { description: 4 },
          { description: 5 },
          { description: 6 },
          { description: 7 },
        ]}
        contentContainerStyle={{
          padding: 16,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "wrap",
        }}
        renderItem={() => <CardInfo />}
        keyExtractor={(item) => item.name}
      ></FlatList>
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
