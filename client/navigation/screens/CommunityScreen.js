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
import { Discover } from "../sharedComponents/Discover";
// import { AddNewPost } from "../sharedComponents/NewPost/AddNewPost";
// import FormikPostUploader from "../sharedComponents/NewPost/FormitPostUploader";

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
];

const FOLLOWING_DATA = [
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
      <View sytle={styles.centerContent}>
        <Text style={styles.subtitle}>Social</Text>
      </View>
      <ScrollView>
        <Text style={styles.sectionNames}>CardsChat</Text>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal={true}
        />
        <View>
          <Text style={styles.sectionNames}>Following</Text>
          <Discover />
        </View>
      </ScrollView>
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
  subtitle: {
    fontSize: 28,
    color: colors.bumpGrey,
    fontWeight: "bold",
    marginTop: 20,
    paddingLeft: 20,
    marginBottom: 20,
  },
  centerContent: {
    flex: 1,
    alignItems: "center",
  },
  container: {},
  item: {
    backgroundColor: "#202020",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    width: 120,
    height: 200,
    borderRadius: 10,
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
});
