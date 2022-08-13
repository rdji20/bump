import React, { useEffect, useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Searchbar } from "react-native-paper";

export function SearchSubscreen() {
  return (
    <View>
      <Searchbar
        // iconColor={colors.orangeBump}
        style={styles.searchBar}
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        theme={{ colors: { text: colors.orangeBump } }}
      />
    </View>
  );
}
