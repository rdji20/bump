import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import Card from "../sharedComponents/card";

export function ProfileScreen() {
  const Tab = createMaterialTopTabNavigator();

  [tabState, setTabState] = useState(false);

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

  const EachCard = () => {
    return (
      <Card>
        <View style={{ width: "100%", height: "85%" }}>
          <Image
            style={{ flex: 2, width: undefined }}
            source={require("../../images/Snoqualmie_Falls.png")}
          />
        </View>
        <Text style={{ flex: 1 }}>Item</Text>
      </Card>
    );
  };

  let savedCardsArray = [];
  for (let i = 0; i < DATA.length; i++) {
    savedCardsArray.push(<EachCard key={i} />);
  }

  const SavedCards = () => {
    return (
      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            alignContent: "flex-start",
            width: "100%",
            height: "100%",
            flexWrap: "wrap",
          }}
        >
          {/*savedCardsArray*/}
          {DATA.map((post, index) => (
            <Card post={post} key={index}>
              <View style={{ width: "100%", height: "85%" }}>
                <Image
                  style={{ flex: 2, width: undefined }}
                  source={require("../../images/Snoqualmie_Falls.png")}
                />
              </View>
              <Text style={{ flex: 1 }}>{post.title}</Text>
            </Card>
          ))}

          {/*
                    <Card>
                        <View style={{width: '100%', height:'85%'}}>
                            <Image style= {{flex:1 , width: undefined, height: undefined}} source={require('../../images/Snoqualmie_Falls.png')}/>
                        </View>
                        <Text style={{flex:1}}>Snoqualmie Falls</Text>
                    </Card>
                    */}
          {/*<Card>
                        <View style={{width: '100%', height:'85%'}}>
                            <Image style= {{flex:1 , width: undefined, height: undefined}} source={require('../../images/food-and-drink.png')}/>
                        </View>
                        <Text style={{flex:1}}>Food and Drink</Text>
                    </Card>*/}
        </View>
      </ScrollView>
    );
  };

  const MyCards = () => {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "left",
          width: "100%",
          height: "66%",
          flexWrap: 1,
        }}
      >
        <Card style={styles.card}>
          <View style={{ width: "100%", height: "85%" }}>
            {
              <Image
                style={{ flex: 1, width: undefined, height: undefined }}
                source={require("../../images/KerryPark.png")}
              />
            }
          </View>
          <Text style={{ flex: 1 }}>Enjoy Seattle's View hello</Text>
        </Card>

        <Card style={{ margin: 30 }}>
          <View style={{ width: "100%", height: "85%" }}>
            <Image
              style={{ flex: 1, width: undefined, height: undefined }}
              source={require("../../images/candle.png")}
            />
          </View>
          <Text style={{ flex: 1 }}>Make a candle</Text>
        </Card>

        <Card>
          <View style={{ width: "100%", height: "85%" }}>
            <Image
              style={{ flex: 1, width: undefined, height: undefined }}
              source={require("../../images/candle.png")}
            />
          </View>
          <Text style={{ flex: 1 }}>Make a candle</Text>
        </Card>
      </View>
    );
  };

  const selectSavedCards = () => {
    if (tabState !== true) setTabState(true);
  };

  const selectMyCards = () => {
    if (tabState !== false) setTabState(false);
  };

  return (
    <View style={styles.main}>
      {/*
                <View style={{flexDirection: 'row', justifyContent: 'center', paddingTop: 15}}>
                    <Image style={styles.pfp} source={require('../../images/sample-sarah.png')} />
                    <View style={{justifyContent: 'center', padding: 15}}>
                        <Text style={styles.name}>Sarah Hayes</Text>
                        <Text style={styles.stats}>0 Points</Text>
                        <Text style={styles.stats}>0 Acheivements</Text>
                    </View>
                </View>
                <View style={{flexDirection: 'row', paddingTop: 20, paddingBottom: 20, justifyContent: 'space-between'}}>
                    <Text style={styles.tag}>Foodie </Text>
                    <Text style={styles.tag}>animal lover</Text>
                    <Text style={styles.tag}>Cooking/Baking</Text>
                    
                </View>
        */}
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <Pressable
          style={tabState ? styles.activeButton : styles.button}
          title="Saved Cards"
          onPress={selectSavedCards}
        >
          <Text>Saved Cards</Text>
        </Pressable>
        <Pressable
          style={!tabState ? styles.activeButton : styles.button}
          title="My Cards"
          onPress={selectMyCards}
        >
          <Text>My Cards</Text>
        </Pressable>
      </View>
      {tabState ? <SavedCards /> : <MyCards />}

      {/*
            <TouchableOpacity style={styles.touchableOpacity}>
                <Image style={styles.floatingButton} source={require('../../images/addButton.png')}/>
            </TouchableOpacity>
        */}
    </View>
  );
}

const styles = StyleSheet.create({
  activeButton: {
    borderBottomColor: "rgb(0, 0, 0)",
    borderBottomWidth: 3,
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
  button: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
  main: {
    paddingTop: 100,
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "column",
  },
  name: {
    fontWeight: "bold",
    fontSize: 24,
  },
  stats: {
    fontSize: 16,
  },
  pfp: {
    maxWidth: 120,
    maxHeight: 120,
    borderRadius: 60,
  },
  tag: {
    backgroundColor: "#BEA4F5",
    fontSize: 16,
    padding: 5,
    borderRadius: 50,
    margin: 3,
  },

  savedCardImg: {
    maxWidth: 5,
    maxHeight: 5,
  },

  touchableOpacity: {
    position: "absolute",
    width: 50,
    height: 50,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    right: 30,
    bottom: 30,
    backgroundColor: "#8664F6",
    elevation: 3,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },

  floatingButton: {
    resizeMode: "contain",
    width: 25,
    height: 25,
  },
});
