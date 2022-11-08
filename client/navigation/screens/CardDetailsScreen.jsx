import React from "react";
import { View, StyleSheet, Text, Image, ScrollView } from "react-native";

export const CardDetailsScreen = (props) => {
    const cardArray = props.route.params.pressedCard;
    const cardId = cardArray[0];
    const cardInfo = cardArray[1];
    const imgname =
        "https://raw.githubusercontent.com/rdji20/bumpImages/main/bumpImg/" +
        cardId +
        ".jpg";
    const image = {
        uri: imgname,
    };
    const {
        title = "Bump HQ",
        icon,
        description = "",
        linkImage = "../../images/gradient_default_card.png",
        location = "10514 Riviera Pl 98125",
        isOpenNow = true,
        keywords = ["lakehouse ", "HQ ", "Kayak "],
        day = "",
    } = cardInfo;

    return (
        <View>
            <Image style={styles.cardImg} source={image} />
            <Text style={styles.titleText}>{title}</Text>
            <Text style={styles.keywordsText}>{keywords}</Text>
            <ScrollView>
                <Text style={styles.descriptionText}>{description}</Text>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    cardImg: {
        aspectRatio: 5 / 4,
        width: "100%",
        resizeMode: "cover",
    },
    descriptionText: {
        fontSize: 20,
        marginLeft: 10,
        marginTop: 20,
    },
    titleText: {
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 10,
    },
    keywordsText: {
        fontSize: 12,
        color: "grey",
        textAlign: "center",
    },
});
