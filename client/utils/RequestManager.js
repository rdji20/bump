import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import * as SecureStore from "expo-secure-store";

export const localIPAddress = "192.168.86.45";
export const flaskIpAddress = "192.168.86.242";

/*
  This function mkaes sure to start a new "user" if the device is not registered
  temp is the variable that makes the phone to get a new user everysingle time
*/
export async function getDeviceId(temp = false) {
    // Activate this for testing mode
    // if (!temp) {
    //     await SecureStore.deleteItemAsync("deviceId");
    // }
    let deviceId = await SecureStore.getItemAsync("deviceId");
    let firstTimeUser = false;

    if (deviceId === undefined || deviceId === null) {
        firstTimeUser = true;
        deviceId = uuidv4();
        SecureStore.setItemAsync("deviceId", deviceId);
    } else {
        const isInDatabase = fetch(`http://${flaskIpAddress}:5000/bumpUsers`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                mobileId: deviceId,
            }),
        })
            .then((response) => response.json())
            .then((json) => {
                if (json.userStatus == "notInDb") {
                    SecureStore.deleteItemAsync("deviceId");
                    firstTimeUser = true;
                    deviceId = uuidv4();
                    SecureStore.setItemAsync("deviceId", deviceId);
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }
    return { firstTimeUser, deviceId };
}

export async function addUser(queryString, deviceId = global.deviceId) {
    const responseHello = await fetch(
        `http://${flaskIpAddress}:5000/registration`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                mobileId: deviceId,
            }),
        }
    ).catch((error) => {
        console.error(error);
    });
    const responseJson = await responseHello.json();
    return responseJson;
}

export async function getRecommendations() {
    const user = await getUser();
    const queryString = user.query;

    const response = await fetch(
        `http://${localIPAddress}:8000/bumprecs_sea/${queryString}`
    ).catch((e) => {
        console.log(e);
    });

    const responseJson = await response.json();

    return responseJson.sea_cards_ids;
}

export async function getCards() {
    let allCardsStorage = {
        activeCards: [],
        trendingCards: [],
        takeAWalk: [],
    };
    const allCards = fetch(`http://${flaskIpAddress}:5000/allCards`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            mobileId: global.deviceId,
        }),
    })
        .then((response) => response.json())
        .then((json) => {
            allCardsStorage.activeCards[0] = json[0].activeCards;
            allCardsStorage.trendingCards[0] = json[1].trendingCards;
            allCardsStorage.takeAWalk[0] = json[2].takeAWalk;
            return allCardsStorage;
        })
        .catch((error) => {
            console.error(error);
        });
    allCardsStorage = await allCards;
    return { allCardsStorage };
}

export async function getCard(cardId) {
    const response = await fetch(
        `http://${localIPAddress}:3000/cards?cardId=${cardId}`
    );
    const responseJson = await response.json();
    if (responseJson.status === "success") {
        return responseJson.payload;
    }
    return undefined;
}

export async function getUser(deviceId = global.deviceId) {
    const response = await fetch(
        `http://${localIPAddress}:3000/users?deviceId=${deviceId}`
    );
    const responseJson = await response.json();
    if (responseJson.status === "success") {
        return responseJson.payload;
    }
    return undefined;
}
