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
import { LinearGradient } from "expo-linear-gradient";

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
        <LinearGradient
          colors={["#4D4DFF", "#FF006E"]}
          start={{ x: 0, y: 0.2 }}
          end={{ x: 0.5, y: 1 }}
          style={styles.container_gradient}
        >
          <Text style={styles.paragraph}>Welcome to Bump</Text>

          <Text style={styles.prompt}>Tell us a lil bit about yourself.</Text>

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
        </LinearGradient>
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
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  prompt: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 12,
    color: "#FF006E",
  },
  input: {
    margin: 15,
    borderColor: "#FF006E",
    borderWidth: 1,
    borderRadius: 10,
    padding: 8,
    height: 100,
    width: 200,
  },
  submitButton: {
    backgroundColor: "#FF006E",
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
});
