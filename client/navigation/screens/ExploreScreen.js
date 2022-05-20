import { Entypo, Feather, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { assets } from ".";
import * as RequestManager from "../../utils/RequestManager";

export function ExploreScreen() {
  const [cardData, setCardData] = useState([]);
  const [filters, setFilters] = useState([false, false, false]);
  const filterMap = useRef({
    Events: 0,
    "Things To Do": 1,
    "Food & Drink": 2,
  });
  const recs = useRef([]);

  useEffect(() => {
    RequestManager.getRecommendations()
      .then((recommendations) => {
        recs.current = recommendations
      })
      .then(() => {
        getCardData(recs.current).then((data) => {
          setCardData(data);
        });
      });
  }, []);

  const getCardData = async (cardIdList) => {
    return Promise.all(
      cardIdList.map((cardId) => {
        return RequestManager.getCard(cardId);
      })
    );
  };

  const Card = (props) => {
    const [saved, setSaved] = useState(false);
    const [showSaveText, setShowSaveText] = useState(false);
    const [showFullCard, setShowFull] = useState(false);
    const slideAnim = useRef(new Animated.Value(40)).current;

    const slideUp = () => {
      // Will change fadeAnim value to 1 in 5 seconds
      Animated.timing(slideAnim, {
        toValue: 65,
        duration: 500
      }).start();
    };

    const slideDown = () => {
      // Will change fadeAnim value to 1 in 5 seconds
      Animated.timing(slideAnim, {
        toValue: 40,
        duration: 500
      }).start();
    };

    const {
      title,
      description,
      when,
      where,
      tags,
      img_name,
      card_id,
      category,
    } = props.data;

    useEffect(() => {
      if (saved) {
        RequestManager.addToSavedCards(card_id);
      } else {
        RequestManager.removeFromSavedCards(card_id);
      }
    }, [saved]);

    useEffect(() => {
      if (showFullCard) {
        slideUp();
      } else {
        slideDown();
      }
    }, [showFullCard]);

    const summarize = (desc, len = 40) => {
      if (desc.length > len) {
        return desc.substring(0, len) + "...";
      }
      return desc;
    };

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
          source={assets[img_name]}
          style={{
            width: "100%",
            height: 547,
            resizeMode: "cover",
            aspectRatio: 1,
          }}
        />
        <View
          style={{
            position: "absolute",
            justifyContent: "flex-end",
            width: "100%",
            height: "100%",
          }}
        >
          <View
            style={{
              position: "absolute",
              paddingLeft: 25,
              height: "93%",
            }}
          >
            <Text style={styles.titleText}>{}</Text>
          </View>
          <Image
            source={require("../../images/save.png")}
            style={
              showSaveText ? { marginLeft: 150 } : { opacity: 0, height: 0 }
            }
          />
          <Animated.View style={{height: slideAnim.interpolate({
            inputRange: [40, 100],
            outputRange: ['40%', '100%']
          })}}>
          <LinearGradient
            colors={["transparent", "rgba(0, 0, 0, 0.9)"]}
            style={{ height: "100%" }}
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
                <Text style={styles.text}>{summarize(where, 30)}</Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Feather
                  name="clock"
                  size={18}
                  color="white"
                  style={styles.contentIcons}
                />
                <Text style={styles.text}>{summarize(when, 30)}</Text>
              </View>
              <TouchableOpacity onPress={() => setShowFull(!showFullCard)}>
                <Text style={[styles.text, {paddingRight: '20%'}]}>{(showFullCard) ? description : summarize(description)}</Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                position: "absolute",
                alignSelf: "flex-end",
                justifyContent: "flex-end",
                paddingRight: 25,
                paddingTop: 30,
                paddingBottom: 30,
                height: '100%'
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  setSaved(
                    !saved
                  ); /* Add Animation later for saved/unsaved card*/
                }}
              >
                <MaterialIcons
                  name={saved ? "bookmark" : "bookmark-outline"}
                  size={35}
                  color={saved ? "rgb(95,150,254)" : "white"}
                  style={styles.buttonIcons}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Feather
                  name="thumbs-down"
                  size={30}
                  color="white"
                  style={styles.buttonIcons}
                />
              </TouchableOpacity>
              <Entypo
                name="dots-three-horizontal"
                size={25}
                color="white"
                style={styles.buttonIcons}
              />
            </View>
          </LinearGradient>
          </Animated.View>
        </View>
      </View>
    );
  };

  cards = [];
  for (let i = 0; i < cardData.length; i++) {
    const noFilters = !filters[0] && !filters[1] && !filters[2];
    console.log(filterMap.current);
    console.log(cardData[i].category);
    if (noFilters || filters[filterMap.current[cardData[i].category]]) {
      cards.push(<Card key={i} data={cardData[i]} />);
    }
  }

  const Header = () => {
    const pressFilter = (filterIndex) => {
      if (filters[filterIndex]) {
        setFilters([false, false, false])
      } else {
        let newFilters = [false, false, false];
        newFilters[filterIndex] = true;
        setFilters(newFilters);
      }
    };

    return (
      <View style={{ marginBottom: 0 }}>
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: 400,
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
            paddingLeft: "10%",
            flexDirection: "row",
            justifyContent: "space-around",
            alignContent: "flex-end",
            width: "100%",
            position: "relative",
            top: 30,
            right: "15%",
          }}
        >
          <TouchableOpacity onPress={() => pressFilter(0)}>
            {filters[0] ? (
              <Text style={[styles.tabs, styles.activeTab]}>{"Events"}</Text>
            ) : (
              <Text style={styles.tabs}>{"Events"}</Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => pressFilter(1)}>
            {filters[1] ? (
              <Text style={[styles.tabs, styles.activeTab]}>
                {"Things to do"}
              </Text>
            ) : (
              <Text style={styles.tabs}>{"Things to do"}</Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => pressFilter(2)}>
            {filters[2] ? (
              <Text style={[styles.tabs, styles.activeTab]}>
                {"Food & Drinks"}
              </Text>
            ) : (
              <Text style={styles.tabs}>{"Food & Drinks"}</Text>
            )}
          </TouchableOpacity>
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
        snapToInterval={555}
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
  logo: {
    position: "relative",
    left: 20,
  },
  activeTab: {
    color: "#8664F6",
    textDecorationLine: "underline",
    fontWeight: "bold",
    textDecorationColor: "#8664F6",
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
    paddingRight: 20
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
