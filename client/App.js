import React, { useEffect, useState, useRef } from "react";
import {
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

const currentCityLocation = "Seattle";

export default function App() {
    LogBox.ignoreAllLogs();

    [initialized, setInit] = useState(false);
    [userInfo, setUserInfo] = useState("");

    //Runs hook one time upon app initialization
    useEffect(() => {
        RequestManager.getDeviceId(initialized).then((results) => {
            const { firstTimeUser, deviceId } = results;
            global.deviceId = deviceId;
            if (!firstTimeUser) setInit(true);
        });
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
                    <View
                        style={{
                            flex: 1,
                            marginLeft: 20,
                            marginTop: 5,
                            alignItems: "flex-start",
                        }}
                    >
                        <Image
                            style={styles.mainLogo}
                            source={require("./images/Bump_Logo_Spellout_orange.png")}
                        />
                    </View>
                    <View
                        style={{
                            marginLeft: 20,
                            alignItems: "flex-start",
                            paddingBottom: 10,
                        }}
                    >
                        <Text style={styles.prompt}>
                            Pick 5 cards you'd like to experience
                        </Text>
                        <Text style={{ fontSize: 11 }}>
                            Recommendations improve by liking and sharing cards
                        </Text>
                    </View>
                    <View>
                        <View style={{ alignItems: "center", margin: 20 }}>
                            <Text>Current loc:</Text>
                            <Text>{currentCityLocation}</Text>
                        </View>
                    </View>
                    <ChooseCardsSubSection />
                </ScrollView>
                <View style={styles.submitButton}>
                    <TouchableOpacity
                        style={styles.submitButtonContainer}
                        onPress={() => {
                            RequestManager.addUser(userInfo);
                            setInit(true);
                            console.log(initialized);
                        }}
                    >
                        <Text style={styles.submitButtonText}> DONE </Text>
                    </TouchableOpacity>
                </View>
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
        fontSize: 18,
        color: "#000000",
        fontWeight: "bold",
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
        backgroundColor: "white",
        width: "100%",
        height: 60,
        borderRadius: 5,
        position: "absolute",
        bottom: 20,
        justifyContent: "center",
    },
    submitButtonContainer: {
        width: 80,
        backgroundColor: "#000000",
        padding: 10,
        alignSelf: "center",
        borderRadius: 5,
    },
    submitButtonText: {
        color: "white",
        textAlign: "center",
    },
    mainLogo: {
        width: 60.2,
        height: 21,
        resizeMode: "cover",
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
