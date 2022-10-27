import color from "color";
import React, { useState } from "react";
import {
    Image,
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Pressable,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export const HomeCardInfo = (props) => {
    const [loading, setLoading] = useState(true);
    const imgname =
        "https://raw.githubusercontent.com/rdji20/bumpImages/main/bumpImg/" +
        props.id +
        ".jpg";
    const image = {
        uri: imgname,
    };

    const {
        title = "Bump HQ",
        icon,
        description = "This is bump's first HQ when it was just a dream",
        linkImage = "../../images/gradient_default_card.png",
        location = "10514 Riviera Pl 98125",
        isOpenNow = true,
        keywords = ["lakehouse ", "HQ ", "Kayak "],
        day = "Monday",
    } = props.card;

    [clicked, setClicked] = useState(false);

    const cardViewToggle = () => {
        if (clicked) {
            setClicked(false);
        } else {
            setClicked(true);
        }
    };

    return (
        <View style={styles.cardContainer}>
            <ImageBackground
                source={image}
                imageStyle={{ borderRadius: 20 }}
                resizeMode="cover"
                style={styles.image}
            >
                <LinearGradient
                    colors={["transparent", "rgba(0, 0, 0, 0.5                                                     )"]}
                    style={{ height: "100%", borderRadius: 15 }}
                >
                    <View style={{ flex: 0.2 }}></View>
                    <View style={styles.cardContent}>
                        <View style={{ flex: 1 }}>
                            <View style={{ flex: 0.5 }}></View>
                            <View style={{ flex: 1 }}>
                                <Text numberOfLines={5} style={styles.title}>
                                    {title}
                                </Text>
                                <Text
                                    style={styles.keywordsText}
                                    numberOfLines={1}
                                >
                                    {keywords}
                                </Text>
                            </View>
                        </View>
                    </View>
                </LinearGradient>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    dayHeader: {
        textAlign: "center",
        fontSize: 30,
        color: "white",
        fontWeight: "bold",
        marginTop: 10,
    },
    cardContainer: {
        width: 300,
        height: 300,
        borderRadius: 10,
        margin: 5,
        flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: "center",
        borderRadius: 26,
    },
    cardContent: {
        flex: 1,
        justifyContent: "center",
        flexDirection: "row",
    },
    title: {
        color: "white",
        fontSize: 24,
        fontWeight: "bold",
        marginLeft: 20,
        flex: 1,
    },
    interactions: {
        // backgroundColor: "black",
        flex: 1,
        borderRadius: 30,
    },
    keywordsText: {
        flex: 0.5,
        fontSize: 14,
        color: "white",
        marginLeft: 20,
    },
});
