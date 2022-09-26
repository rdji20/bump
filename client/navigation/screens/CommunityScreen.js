import color from "color";
import React from "react";
import {
  Text,
  SafeAreaView,
  FlatList,
  ScrollView,
  StyleSheet,
  StatusBar,
  View,
  Image,
} from "react-native";
import { colors } from "../../utils/colors";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
];

const FOLLOWING_DATA = [
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export const CommunityScreen = () => {
  const renderItem = ({ item }) => <Item title={item.title} />;
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Text>Groups</Text>
      </View>
      <FlatList
        contentContainerStyle={styles.groupsCoontainer}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionNames: {
    color: colors.eerieBlack,
    marginLeft: 20,
    paddingBottom: 10,
    fontSize: 18,
    paddingTop: 20,
  },
  header: {
    justifyContent: "center",
  },
  item: {
    backgroundColor: "#202020",
    width: 165,
    height: 220,
    borderRadius: 10,
    margin: 10,
  },
  title: {
    fontSize: 32,
  },
  secondaryLogo: {
    width: 100,
    height: 30,
    resizeMode: "cover",
    marginBottom: 10,
  },
  mainLogo: {
    width: 95,
    height: 33.77,
    resizeMode: "cover",
    marginBottom: 20,
  },
  groupsCoontainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    color: "rgb(134, 100, 246)",
    marginTop: 20,
  },
});
