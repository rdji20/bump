import React, { useEffect, useState } from "react";
import {
  Keyboard,
  LogBox,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Image,
} from "react-native";
import { MyTabs } from "./navigation/MainContainer";
import * as RequestManager from "./utils/RequestManager";

export default function App() {
  LogBox.ignoreAllLogs();

  [initialized, setInit] = useState(false);
  [userInfo, setUserInfo] = useState("");

  //Runs hook one time upon app initialization
  useEffect(() => {
    RequestManager.getDeviceId(initialized)
      .then((results) => {
        const { firstTimeUser, deviceId } = results;
        console.log(firstTimeUser + " " + deviceId);
        global.deviceId = deviceId;
        if (!firstTimeUser) setInit(true);
        console.log("done" + deviceId);
      })
      .then(() => console.log("Current DeviceID:" + global.deviceId));
  }, []);

  return initialized ? (
    <MyTabs />
  ) : (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        {console.log("hello world")}
        <Image
          style={styles.tinyLogo}
          source={require("./images/Bump_Logo_Spellout_orange.png")}
        />
        <Text style={styles.paragraph}>Welcome to Bump</Text>

        <Text style={styles.prompt}>
          Tell us a lil bit about you so we can start recommending you things to
          do.
        </Text>

        <TextInput
          multiline
          style={styles.input}
          placeholder="e.g. I like netflix, coffee and going to hikes"
          onChangeText={(val) => setUserInfo(val)}
        />

        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => {
            RequestManager.addUser(userInfo).then(() => setInit(true));
          }}
        >
          <Text style={styles.submitButtonText}> Submit </Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FE5845",
  },
  paragraph: {
    margin: 24,
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
  prompt: {
    marginTop: 10,
    marginBottom: 10,
    width: "60%",
    fontSize: 18,
    color: "#000000",
  },
  input: {
    margin: 15,
    borderColor: "white",
    borderWidth: 3,
    borderRadius: 10,
    padding: 8,
    height: 100,
    width: 200,
  },
  submitButton: {
    backgroundColor: "#000000",
    padding: 10,
    marginVertical: 20,
    height: 40,
    borderRadius: 5,
  },
  submitButtonText: {
    color: "white",
  },
  container_gradient: {
    width: "100%",
    height: "100%",
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  tinyLogo: {
    width: 50,
    height: 50,
    resizeMode: "stretch",
  },
});
