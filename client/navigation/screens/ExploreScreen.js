
import { Entypo, Feather, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as RequestManager from '../../utils/RequestManager';


export function ExploreScreen() {
  // const [saved, setSaved] = React.useState(
  //   new Array(10).fill(false)
  // );
  // const handleSaved = (position) => {
  //   const updateSaved = saved.map((data, i) =>
  //     i === position ? !data : data
  //   );

  //   setSaved(updateSaved);

  // };
  const [showSaveText, setShowSaveText] = useState(false)
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    if (showSaveText) {
      // 1000 for 1 second
      setTimeout(() => setShowSaveText(false), 2000)
    }
  }, [showSaveText])

  useEffect(() => {
    getCardData([202]).then(data => {
      setCardData(data);
    });
  }, []);


  const getCardData = async (cardIdList) => {
    return Promise.all(cardIdList.map(cardId => {
      return RequestManager.getCard(cardId);
    }));
  }

  const Card = (props) => {
    const [saved, setSaved] = useState(false)
    const { title, description, when, where, tags, img_name } = props.data
    
    return (
      <View
        style={{
          backgroundColor: "white",
          marginBottom: "2%",
          shadowColor: "black",
          shadowOpacity: 0.5,
        }}
      >
        <Image
          source={require("../../images/Snoqualmie_Falls.png")}
          style={{ width: "100%", resizeMode: "cover", aspectRatio: 1 }}
        />
        <View
          style={{
            position: "absolute",
            justifyContent: "flex-end",
            width: "100%",
            height: "100%",
          }}
        >
          <View style={{
                position: "absolute",
                paddingLeft: 25,
                height: "93%" 
              }}>
                <Text style={styles.titleText}>{title}</Text>
          </View>
          <Image
          source={require("../../images/save.png")}
          style={showSaveText?{marginLeft: 150}:{opacity: 0, height: 0}}
          />
          <LinearGradient
            colors={["transparent", "rgba(0, 0, 0, 0.9)"]}
            style={{ height: "40%" }}
          >
            
            <View
              style={{
                position: "absolute",
                paddingLeft: 25,
                paddingTop: "20%",
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.nameText}>{title}</Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Ionicons
                  name="location-sharp"
                  size={18}
                  color="white"
                  style={styles.contentIcons}
                />
                <Text style={styles.text}>{where}</Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Feather name="clock" size={18} color="white" style={styles.contentIcons}/>
                <Text style={styles.text}>{when}</Text>
              </View>
              <TouchableOpacity onPress={() => console.log("click")}>
                <Text style={styles.text}>{description}</Text>
              </TouchableOpacity>
            </View>
            
              <View style={{position: 'absolute', alignSelf: 'flex-end', paddingRight: 25, paddingTop: 30}}>
                <TouchableOpacity onPress={() => {setSaved(!saved) /*setShowSaveText(true)*/ }}>
                  <MaterialIcons name={saved ?"bookmark":"bookmark-outline"} size={35} color={saved?'rgb(95,150,254)':"white"} style={styles.buttonIcons}/>
                </TouchableOpacity>
                <TouchableOpacity >
                  <Feather name='thumbs-down' size={30} color='white' style={styles.buttonIcons} />
                    </TouchableOpacity>
                    <Entypo name="dots-three-horizontal" size={25} color="white" style = {styles.buttonIcons} />
              </View>
              
            
          </LinearGradient>
        </View>
      </View>
    );
  };

  cards = [];
  for (let i = 0; i < cardData.length; i++) {
    console.log(JSON.stringify(cardData[i]));
    cards.push(<Card key={i} data={cardData[i]} />);
  }

  const Header = () => {
    return (
      <View style={{ marginBottom: 0 }}>
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "400",
          }}
        >
          <Image
            source={require("../../images/logo_mobile_black.png")}
            style={styles.logo}
          />
        </View>
        <View
          style={{
            marginTop: 10,
            flexDirection: "row",
            justifyContent: "center",
            alignContent: "flex-end",
            width: "100%",
            position: "relative",
            top: 30,
            right: "15%",
          }}
        >
          <Text style={styles.tabs}>{"Events"}</Text>
          <Text
            style={[
              styles.tabs,
              {
                color: "#8664F6",
                textDecorationLine: "underline",
                fontWeight: "bold",
                textDecorationColor: "#8664F6",
                marginLeft: 40,
                marginRight: 30,
              },
            ]}
          >
            Things to do
          </Text>
          <Text style={styles.tabs}>{"Food & Drinks"}</Text>
        </View>
      </View>
    );
  };

  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        marginTop: "15%",
      }}
    >
      <Header />
      <ScrollView
        style={styles.scrollContainer}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        snapToInterval={547}
        disableScrollViewPanResponder={true}
      >
        {cards}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    marginTop: "10%",
    width: "100%",
  },
  tabs: {
    fontSize: 14,
    fontWeight: "500",
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    color: "rgb(134, 100, 246)",
  },
  text: {
    fontSize: 14,
    color: "rgb(255, 255, 255)",
    paddingVertical: 8,
  },
  titleText: {
    fontSize: 28,
    color: "rgb(255, 255, 255)",
    fontWeight: "bold",
    paddingVertical: 5,
  },
  nameText: {
    fontSize: 20,
    color: "rgb(255, 255, 255)",
    fontWeight: "bold",
    paddingVertical: 5,
  },
  buttonIcons: {
    paddingVertical: 12,
  },
  contentIcons: {
    paddingRight: 5,
    paddingTop: 8,
  },
});
