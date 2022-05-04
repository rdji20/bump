import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import * as SecureStore from "expo-secure-store";

const localIPAddress = '192.168.1.193';

export async function getDeviceId() {
  let deviceId = await SecureStore.getItemAsync("deviceId");
  if (deviceId === undefined || deviceId === null) {
    deviceId = uuidv4();
    SecureStore.setItemAsync("deviceId", JSON.stringify(deviceId));
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
const addUserCardsEndpointTemplate = `http://${localIPAddress}:3000/users/add?deviceId=`;

export function addToMyCards(cardId) {
  const addUserCardsEndpoint = addUserCardsEndpointTemplate + global.deviceId;
  const body = {
    cardId: cardId,
    collection: "myCards",
  };
  update("PATCH", body, addUserCardsEndpoint);
}

export function addToSavedCards(cardId) {
  const addUserCardsEndpoint = addUserCardsEndpointTemplate + global.deviceId;
  const body = {
    cardId: cardId,
    collection: "savedCards",
  };
  update("PATCH", body, addUserCardsEndpoint);
}

export function addToDislikedCards(cardId) {
  const addUserCardsEndpoint = addUserCardsEndpointTemplate + global.deviceId;
  const body = {
    cardId: cardId,
    collection: "dislikedCards",
  };
  update("PATCH", body, addUserCardsEndpoint);
}

//REMOVE CARDS FROM CURRENT USER
const removeUserCardsEndpointTemplate = `http://${localIPAddress}:3000/users/remove?deviceId=`;

export function removeFromMyCards(cardId) {
  const removeUserCardsEndpoint = removeUserCardsEndpointTemplate + global.deviceId;
  const body = {
    cardId: cardId,
    collection: "myCards",
  };
  update("PATCH", body, removeUserCardsEndpoint);
}

export function removeFromSavedCards(cardId) {
  const removeUserCardsEndpoint = removeUserCardsEndpointTemplate + global.deviceId;
  const body = {
    cardId: cardId,
    collection: "savedCards",
  };
  update("PATCH", body, removeUserCardsEndpoint);
}

export function removeFromDislikedCards(cardId) {
  const removeUserCardsEndpoint = removeUserCardsEndpointTemplate + global.deviceId;
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
