import React, { useEffect, useRef, useState, useContext } from "react";
import {
    Image,
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    FlatList,
    ScrollView,
} from "react-native";
import { HomeCardInfo } from "../sharedComponents/HomeCardInfo";
import { CardsContext } from "../../services/cards/cards.context";
import { ActivityIndicator, Colors } from "react-native-paper";
import * as RequestManager from "../../utils/RequestManager";

export const HomeScreen = () => {
    /* 
  This is the main layout of the bumpCards screen
  */

    // Code this variable with current location
    const currentLoc = "SEATTLE";

    const [activeCards, setActiveCards] = useState([]);
    const [isactiveCardsEmpty, setisActiveCardsEmpty] = useState(true);
    const [trendingCards, setTrendingCards] = useState([]);
    const [takeAWalk, setTakeAWalk] = useState([]);

    function checkActiveData() {
        if (activeCards.length == 0) {
            return [];
        } else {
            return activeCards;
        }
    }

    //Runs hook one time upon app initialization
    useEffect(() => {
        RequestManager.getCards().then((cards) => {
            setActiveCards(
                Object.entries(cards.allCardsStorage.activeCards[0])
            );
            setTrendingCards(
                Object.entries(cards.allCardsStorage.trendingCards[0])
            );
            setTakeAWalk(Object.entries(cards.allCardsStorage.takeAWalk[0]))
        });
    }, []);

    // Data
    const DATA_TRENDING_CARDS = trendingCards;
    const DATA_ACTIVE_CARDS = checkActiveData();
    const DATA_TAKE_A_WALK = takeAWalk;

    const { isLoading, error, homeCards } = useContext(CardsContext);

    return (
        <View style={{}}>
            <ScrollView contentContainerStyle={{}}>
                <View
                    style={{
                        flex: 1,
                        marginLeft: 20,
                        marginTop: 40,
                        alignItems: "flex-start",
                        flexDirection: "row",
                    }}
                >
                    <Image
                        style={styles.mainLogo}
                        source={require("../../images/bump_icon.png")}
                    />
                    <Text style={styles.locationTitle}>{currentLoc}</Text>
                </View>
                <View
                    style={{
                        flex: 1,
                        alignItems: "center",
                        marginTop: 60,
                        marginBottom: 60,
                    }}
                >
                    <View style={{ flex: 1 }}>
                        <Text style={styles.streamsTitles}>Active</Text>
                        {DATA_ACTIVE_CARDS.length > 1 ? (
                            <FlatList
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                data={DATA_ACTIVE_CARDS}
                                renderItem={({ item }) => {
                                    return <HomeCardInfo card={item} />;
                                }}
                                keyExtractor={(item) => item.description}
                                contentContainerStyle={{
                                    justifyContent: "center",
                                }}
                                decelerationRate={"normal"}
                                // snapToInterval={310} //This number is the height of the card + margin up and down
                            />
                        ) : (
                            <View>
                                <Text>Choose something to do already!</Text>
                            </View>
                        )}
                    </View>
                    <View style={{ flex: 1, alignItems: "flex-start" }}>
                        <Text style={styles.streamsTitles}>Trending</Text>
                        <FlatList
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            data={DATA_TRENDING_CARDS}
                            renderItem={({ item }) => {
                                let cardKey = item[0];
                                let tcard = item[1];
                                return (
                                    <HomeCardInfo id={cardKey} card={tcard} />
                                );
                            }}
                            keyExtractor={(item) => item[0]}
                            contentContainerStyle={{
                                justifyContent: "center",
                            }}
                            decelerationRate={"normal"}
                            // snapToInterval={410} //This number is the height of the card + margin up and down
                        />
                    </View>
                    <View style={{ flex: 1, alignItems: "flex-start" }}>
                        <Text style={styles.streamsTitles}>Take a walk</Text>
                        <FlatList
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            data={DATA_TAKE_A_WALK}
                            renderItem={({ item }) => {
                                let cardKey = item[0];
                                let tcard = item[1];
                                return (
                                    <HomeCardInfo id={cardKey} card={tcard} />
                                );
                            }}
                            keyExtractor={(item) => item[0]}
                            contentContainerStyle={{
                                justifyContent: "center",
                            }}
                            decelerationRate={"normal"}
                            // snapToInterval={410} //This number is the height of the card + margin up and down
                        />
                    </View>
                </View>
                {/* <View style={styles.containerInsideScrollContainer}>{cards}</View> */}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    screenTitle: {
        fontSize: 30,
        textAlign: "center",
        fontWeight: "bold",
    },
    streamsTitles: {
        fontSize: 24,
        fontWeight: "bold",
        marginLeft: 10,
        marginBottom: 10,
        marginTop: 30,
        backgroundColor: "white",
    },
    descriptionContainer: {
        width: "80%",
    },
    searchButton: {
        position: "absolute",
        right: 30,
    },

    containerInsideScrollContainer: {
        marginTop: 10,
    },

    scrollContainer: {
        marginTop: "10%",
        width: "90%",
    },
    title: {
        fontSize: 24,
        fontWeight: "600",
        color: "rgb(134, 100, 246)",
        marginTop: 20,
    },
    text: {
        fontSize: 14,
        color: "rgb(255, 255, 255)",
        paddingVertical: 8,
        paddingRight: 20,
    },
    titleText: {
        fontSize: 28,
        color: "rgb(255, 255, 255)",
        fontWeight: "bold",
        paddingVertical: 5,
    },
    root: {
        justifyContent: "center",
        alignItems: "center",
    },
    searchBar: {
        height: 37,
        width: 313,
        borderRadius: 50,
        zIndex: 3,
    },
    searchBarInput: {
        fontSize: 12,
    },
    cardInfoContainer: {
        marginBottom: 20,
        position: "relative",
    },
    usersContainer: {
        height: 90,
        flexDirection: "row",
        alignItems: "center",
    },
    userSquare: {
        height: 70,
        width: 70,
        backgroundColor: "blue",
        margin: 5,
        borderRadius: 10,
    },
    mainLogo: {
        width: 40,
        height: 50,
        resizeMode: "cover",
        marginBottom: 20,
        marginTop: 10,
    },
    locationTitle: {
        fontSize: 28,
        fontWeight: "normal",
        alignSelf: "center",
    },
});