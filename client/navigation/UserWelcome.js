import React, { useState, useRef, useEffect } from "react";
import {
  Keyboard,
  StyleSheet,
  Text,
  LogBox,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Image,
} from "react-native";
import { colors } from "../utils/colors";
import * as RequestManager from "../utils/RequestManager";

export const UserWelcome = () => {
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

  const [selectedOption, setSelection] = useState([false, false]);

  const pressOption = (optionIndex) => {
    // Select option 1
    if (optionIndex == 0) {
      if (!selectedOption[optionIndex]) {
        setSelection([true, false]);
      }
    } else {
      if (!selectedOption[optionIndex]) {
        setSelection([false, true]);
      }
    }
  };

  const stepScreens = useRef({
    explorer: 0,
    seeker: 1,
  });
  return (
    /*
    These are the "first interaction" screens which are displayed when
    the user gets in the app the first time.
    */
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.goalScreen}>
          <Image
            style={styles.mainLogo}
            source={require("../images/Bump_Logo_Spellout_orange.png")}
          />
          <Text style={styles.paragraph}>BETA</Text>

          <Text style={styles.prompt}>Choose what describes you best:</Text>
          <View style={styles.optionsContainer}>
            <TouchableOpacity onPress={() => pressOption(0)}>
              {selectedOption[0] ? (
                <View style={styles.goalSelected}>
                  <Text>
                    I want to explore new things, activites and places
                  </Text>
                </View>
              ) : (
                <View style={styles.goal}>
                  <Text>
                    I want to explore new things, activites and places
                  </Text>
                </View>
              )}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => pressOption(1)}>
              {selectedOption[1] ? (
                <View style={styles.goalSelected}>
                  <Text>
                    I want to seek things, activites and places I already like
                  </Text>
                </View>
              ) : (
                <View style={styles.goal}>
                  <Text>
                    I want to seek things, activites and places I already like
                  </Text>
                </View>
              )}
            </TouchableOpacity>
          </View>
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
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  paragraph: {
    margin: 5,
    fontSize: 30,
    fontWeight: "bold",
    color: colors.orangeBump,
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
  mainLogo: {
    width: 95,
    height: 33.77,
    resizeMode: "cover",
    marginBottom: 20,
  },
  goal: {
    width: 150,
    height: 150,
    backgroundColor: colors.bumpGrey,
    margin: 10,
    borderRadius: 10,
  },
  goalSelected: {
    width: 150,
    height: 150,
    backgroundColor: "#F9604680",

    margin: 10,
    borderRadius: 10,
  },
  optionsContainer: {
    flexDirection: "row",
  },
});
