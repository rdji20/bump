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
      })
      .then(() => console.log("Current DeviceID:" + global.deviceId));
  }, []);

  return initialized ? (
    <MyTabs />
  ) : (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.paragraph}>Welcome to Bump</Text>

        <Text style={styles.prompt}>Tell us about yourself.</Text>

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
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
  },
  prompt: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 12,
  },
  input: {
    margin: 15,
    borderColor: "#8664F6",
    borderWidth: 1,
    borderRadius: 10,
    padding: 8,
    height: 100,
    width: 200,
  },
  submitButton: {
    backgroundColor: "#8664F6",
    padding: 10,
    marginVertical: 20,
    height: 40,
  },
  submitButtonText: {
    color: "white",
  },
});
