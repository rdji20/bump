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
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.searchBar}>
        <View styles={styles.inputSearch}>
          <TextInput
            style={{ width: "100%" }}
            onChangeText={setQuery}
            label="Search for especific  venues, events, restaurants, etc"
          />
        </View>
        <View style={styles.button}>
          <TouchableOpacity>
            <Text>Search</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flex: 1, padding: 16, backgroundColor: "blue" }}>
        <Text>hello</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBar: {
    flex: 1,
    flexDirection: "row",
  },
  button: {
    flex: 1,
    backgroundColor: "black",
  },
  inputSearch: {
    flex: 1,
  },
});
