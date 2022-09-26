import color from "color";
import React, { useEffect, useState, useRef } from "react";
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
  ScrollView,
  SafeAreaView,
} from "react-native";
import { MyTabs } from "./navigation/MainContainer";
import { colors } from "./utils/colors";
import * as RequestManager from "./utils/RequestManager";
import { CardsContextProvider } from "./services/cards/cards.context";
import { ChooseCardsSubSection } from "./navigation/sharedComponents/ChooseCardsSubSection";
// import * as firebase from "firebase";

// const firebaseConfig = {
//   apiKey: "AIzaSyByGEkhh6pIG9r62zK_qPdFM4oCsZ-onVM",
//   authDomain: "bumpai.firebaseapp.com",
//   databaseURL: "https://bumpai-default-rtdb.firebaseio.com",
//   projectId: "bumpai",
//   storageBucket: "bumpai.appspot.com",
//   messagingSenderId: "308011302935",
//   appId: "1:308011302935:web:c9bb6ecd6cd8806060dc52",
//   measurementId: "G-PFCVZMXQ31",
// };

// firebase.initializeApp(firebaseConfig);

// const [isAuthenticated, setIsAuthenticated] = useState(false);
// // useEffect(() => {
// //   firebase.auth().su
// // }, []);

// const auth = getAuth();
// signInAnonymously(auth)
//   .then((user) => {
//     console.log(user);
//     setIsAuthenticated(true);
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     console.log(errorMessage);
//   });

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
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

  const [stepScreen, setStepScreen] = useState([true, false]);
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

  return initialized ? (
    <CardsContextProvider>
      <MyTabs />
    </CardsContextProvider>
  ) : (
    /*
    These are the "first interaction" screens which are displayed when
    the user gets in the app the first time.
    */
    <CardsContextProvider>
      <SafeAreaView>
        <ScrollView>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
              <View style={styles.horizontalContainer}>
                <Image
                  style={styles.mainLogo}
                  source={require("./images/Bump_Logo_Spellout_orange.png")}
                />
                <Text style={styles.paragraph}>BETA</Text>
              </View>

              {/* <Text style={styles.prompt}>Choose what describes you best:</Text>
              <View style={styles.optionsContainer}>
                <TouchableOpacity onPress={() => pressOption(0)}>
                  {selectedOption[0] ? (
                    <View style={styles.goalSelected}>
                      <Text>
                        I want to explore new things, activites and places
                      </Text>
                    </View>t
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
                        I want to seek things, activites and places I already
                        like
                      </Text>
                    </View>
                  ) : (
                    <View style={styles.goal}>
                      <Text>
                        I want to seek things, activites and places I already
                        like
                      </Text>
                    </View>
                  )}
                </TouchableOpacity>
              </View> */}
              <Text style={styles.prompt}>
                Select the cards you would probably do:
              </Text>
            </View>
          </TouchableWithoutFeedback>
          <ChooseCardsSubSection />
          <View>
            <Text>If there's none click refresh. Select up to 5.</Text>
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
        </ScrollView>
      </SafeAreaView>
    </CardsContextProvider>
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
  horizontalContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
});
