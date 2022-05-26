// SearchBar.js
import React from "react";
import { StyleSheet, TextInput, View, Keyboard, Button } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";

const SearchBar = ({ clicked, searchPhrase, setSearchPhrase, setClicked }) => {
  const [keywords, setKeywords] = React.useState("");

  return (
    <View style={styles.container}>
      <View
        style={
          clicked ? styles.searchBar__clicked : styles.searchBar__unclicked
        }
      >
        {/* search Icon */}
        <Feather
          name="search"
          size={25}
          color="#202020"
          style={{ marginLeft: 1 }}
        />
        {/* Input field */}
        <TextInput
          style={styles.input}
          placeholder="e.g. Bars, parks, mexican "
          value={searchPhrase}
          onChangeText={(val) => {
            setKeywords(val);
          }}
          onSubmitEditing={() => console.log(`User typed ${keywords}`)}
          onFocus={() => {
            setClicked(true);
          }}
        />
        {/* cross Icon, depending on whether the search bar is clicked or not */}
        {clicked && (
          <Entypo
            name="cross"
            size={20}
            color="#202020"
            style={{ padding: 1 }}
            onPress={() => {
              setSearchPhrase("");
              Keyboard.dismiss();
              setClicked(false);
            }}
          />
        )}
      </View>
      {/* cancel button, depending on whether the search bar is clicked or not */}
      {clicked && (
        <View>
          <Button title="Search" color="#202020" onPress={() => {}}></Button>
        </View>
      )}
    </View>
  );
};
export default SearchBar;

// styles
const styles = StyleSheet.create({
  container: {
    margin: 8,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: "80%",
    marginBottom: 0,
  },
  searchBar__unclicked: {
    padding: 5,
    flexDirection: "row",
    width: "95%",
    backgroundColor: "white",
    borderRadius: 20,
    borderWidth: 3,
    borderColor: "#8664F6",
    alignItems: "center",
  },
  searchBar__clicked: {
    padding: 5,
    flexDirection: "row",
    width: "80%",
    backgroundColor: "white",
    borderRadius: 20,
    borderWidth: 3,
    borderColor: "#8664F6",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  input: {
    fontSize: 18,
    color: "#202020",
    marginLeft: 10,
    width: "90%",
  },
});
