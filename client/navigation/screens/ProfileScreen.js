import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React, { useEffect, useState } from "react";
import {
  Image, Pressable, ScrollView, StyleSheet, Text, View
} from "react-native";
import * as RequestManager from '../../utils/RequestManager';
import Card from "../sharedComponents/card";
import { assets } from ".";

export function ProfileScreen() {
  const Tab = createMaterialTopTabNavigator();

  [tabState, setTabState] = useState(false);

  const getSavedCardData = async () => {
    const user = await RequestManager.getUser();
    console.log(JSON.stringify(user));
   return Promise.all(user.savedCards.map(cardId => {
      return RequestManager.getCard(cardId);
    }));
  };

  const getMyCardData = async () => {
   const user = await RequestManager.getUser();
   return Promise.all(user.myCards.map(cardId => {
      return RequestManager.getCard(cardId);
    }));
  };
  
  const SavedCards = () => {

    const [cardData, setCardData] = useState([]);

    useEffect(() => {
      getSavedCardData().then(data => {
        console.log(JSON.stringify(data));
        setCardData(data)
      });
    }, []);
   
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
          {cardData.map((post, index) => 
            <Card post={post} key={index}>
              <View style={{ width: "100%", height: "85%" }}>
                <Image
                  style={{ flex: 2, width: undefined }}
                  source={assets[post.img_name]}
                />
              </View>
              <Text style={{ flex: 1 }}>{post.title}</Text>
            </Card>
          )}
        </View>
      </ScrollView>
    );
  };

  const MyCards = () => {

    [cardData, setCardData] = useState([]);

    useEffect(() => {
      getMyCardData().then(data => setCardData(data));
    }, []);

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
          {cardData.map((post, index) => 
            (<Card post={post} key={index}>
              <View style={{ width: "100%", height: "85%" }}>
                <Image
                  style={{ flex: 2, width: undefined }}
                  source={assets[post.img_name]}
                />
              </View>
              <Text style={{ flex: 1 }}>{post.title}</Text>
            </Card>
          ))}

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

