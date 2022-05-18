import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import * as SecureStore from "expo-secure-store";

const localIPAddress = "172.28.102.144";

export async function getDeviceId(temp = false) {
  if (!temp) {
    await SecureStore.deleteItemAsync("deviceId");
  }
  let deviceId = await SecureStore.getItemAsync("deviceId");
  let firstTimeUser = false;

  if (deviceId === undefined || deviceId === null) {
    firstTimeUser = true;
    deviceId = uuidv4();
    SecureStore.setItemAsync("deviceId", JSON.stringify(deviceId));
  }
  return { firstTimeUser, deviceId };
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

export async function addUser(queryString, deviceId = global.deviceId) {
  const endpoint = `http://${localIPAddress}:3000/users?deviceId=${deviceId}`;
  const body = {
    query: queryString,
  };
  const newUser = await update("POST", body, endpoint);
  console.log(JSON.stringify(newUser));
  return newUser;
}

export async function getRecommendations() {
  const user = await getUser();
  const queryString = user.query;
  console.log("MAKING REQUEST");
  const response = await fetch(
    `http://${localIPAddress}:8000/bumprecs_sea/${queryString}`
  ).catch((e) => {
    console.log(e);
  });

  console.log("ML API Response: " + JSON.stringify(response));
  const responseJson = await response.json();
  console.log("ML API Response: " + JSON.stringify(responseJson));
  return responseJson.sea_cards_ids;
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

export function uploadImage(formData) {
  const uploadImageEndpoint = `http://${localIPAddress}:3000/cards/image`;
  const headers = {
    "Content-Type": "multipart/form-data",
    Accept: "application/json",
  };
  console.log("RIGHT BEFORE REQUEST");
  fetch(uploadImageEndpoint, {
    method: "POST",
    headers: headers,
    body: formData,
  }).catch((err) => {
    console.log(JSON.stringify(err));
  });
}

//REMOVE CARDS FROM CURRENT USER
const removeUserCardsEndpointTemplate = `http://${localIPAddress}:3000/users/remove?deviceId=`;

export function removeFromMyCards(cardId) {
  const removeUserCardsEndpoint =
    removeUserCardsEndpointTemplate + global.deviceId;
  const body = {
    cardId: cardId,
    collection: "myCards",
  };
  update("PATCH", body, removeUserCardsEndpoint);
}

export function removeFromSavedCards(cardId) {
  const removeUserCardsEndpoint =
    removeUserCardsEndpointTemplate + global.deviceId;
  const body = {
    cardId: cardId,
    collection: "savedCards",
  };
  update("PATCH", body, removeUserCardsEndpoint);
}

export function removeFromDislikedCards(cardId) {
  const removeUserCardsEndpoint =
    removeUserCardsEndpointTemplate + global.deviceId;
  const body = {
    cardId: cardId,
    collection: "dislikedCards",
  };
  update("PATCH", body, removeUserCardsEndpoint);
}

//HELPER METHOD FOR NON-GET HTTP REQUESTS
async function update(method, body, endpoint) {
  const response = await fetch(endpoint, {
    method: method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const responseJson = await response.json();
  if (responseJson.status === "success") {
    return responseJson.payload;
  }
  return undefined;
}
