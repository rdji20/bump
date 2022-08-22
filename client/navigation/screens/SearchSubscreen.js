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
import { SearchButton } from "../sharedComponents/SearchButton";

export function SearchSubscreen() {
  const [searchQuery, setQuery] = useState("");
  console.log(searchQuery);
  return (
    <SafeAreaView>
      <View style={styles.container}></View>
      <View style={styles.searchBar}>
        <TextInput
          styles={styles.inputSearch}
          onChangeText={setQuery}
          label="Search for especific  venues, events, restaurants, etc"
        />
        <View style={styles.button}>
          <TouchableOpacity>
            <Text>Search</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBar: {
    width: "80%",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    width: 100,
    padding: 10,
  },
  inputSearch: {},
});
