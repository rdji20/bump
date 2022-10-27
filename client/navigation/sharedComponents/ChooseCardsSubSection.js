import React, { useEffect, useState, useContext } from "react";
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
import { ActivityIndicator, Colors } from "react-native-paper";
import { ChooseCardInfo } from "./ChooseCardInfo";
import { CardsContext } from "../../services/cards/cards.context";

export const ChooseCardsSubSection = () => {
  const { isLoading, error, homeCards } = useContext(CardsContext);
  const max = homeCards.length;
  const getRandomInt = (number) => {
    return Math.floor(Math.random() * number);
  };

  const [selectedCards, setSelectedCards] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const cardsToSelect = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  console.log(homeCards[getRandomInt(max)]);
  return (
    <FlatList
      data={cardsToSelect}
      contentContainerStyle={{
        padding: 16,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "wrap",
      }}
      renderItem={({ item }) => {
        return <ChooseCardInfo card={item} />;
      }}
      keyExtractor={(item) => item.description}
    >
      {console.log(getRandomInt(homeCards.length))}
    </FlatList>
  );
};

const styles = StyleSheet.create({
  searchShowcase: {
    flex: 1,
    padding: 16,
    flexDirection: "row",
    justifyContent: "center",
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
