import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import * as SecureStore from "expo-secure-store";

const localIPAddress = "10.19.98.116";

export async function getDeviceId() {
  let deviceId = await SecureStore.getItemAsync("deviceId");
  if (deviceId === undefined || deviceId === null) {
    deviceId = uuidv4();
    SecureStore.setItemAsync("deviceId", JSON.stringify(uuid));
  }
  return deviceId;
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

export async function getUser() {
  const response = await fetch(
    `http://${localIPAddress}:3000/users?deviceId=${global.deviceId}`
  );
  const responseJson = await response.json();
  if (responseJson.status === "success") {
    return responseJson.payload;
  }
  return undefined;
}

//ADD CARDS TO CURRENT USER
const addUserCardsEndpoint = `http://${localIPAddress}:3000/users/add?deviceId=${global.deviceId}`;

export function addToMyCards(cardId) {
  const body = {
    cardId: cardId,
    collection: "myCards",
  };
  update("PATCH", body, addUserCardsEndpoint);
}

export function addToSavedCards(cardId) {
  const body = {
    cardId: cardId,
    collection: "savedCards",
  };
  update("PATCH", body, addUserCardsEndpoint);
}

export function addToDislikedCards(cardId) {
  const body = {
    cardId: cardId,
    collection: "dislikedCards",
  };
  update("PATCH", body, addUserCardsEndpoint);
}

//REMOVE CARDS FROM CURRENT USER
const removeUserCardsEndpoint = `http://${localIPAddress}:3000/users/remove?deviceId=${global.deviceId}`;

export function removeFromMyCards(cardId) {
  const body = {
    cardId: cardId,
    collection: "myCards",
  };
  update("PATCH", body, removeUserCardsEndpoint);
}

export function removeFromSavedCards(cardId) {
  const body = {
    cardId: cardId,
    collection: "savedCards",
  };
  update("PATCH", body, removeUserCardsEndpoint);
}

export function removeFromDislikedCards(cardId) {
  const body = {
    cardId: cardId,
    collection: "dislikedCards",
  };
  update("PATCH", body, removeUserCardsEndpoint);
}

//HELPER METHOD FOR NON-GET HTTP REQUESTS
async function update(method, body, endpoint) {
  fetch(endpoint, {
    method: method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
}
