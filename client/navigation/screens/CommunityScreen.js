import React from "react";
import { Button } from "react-native";
import { Text, SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import { colors } from "../../utils/colors";
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { AddNewPost } from '../sharedComponents/NewPost/AddNewPost';
// import FormikPostUploader from '../sharedComponents/NewPost/FormitPostUploader'

// function CreateNewCard() {
//     return(
//         <ScrollView>
//             <SafeAreaView style={{ flex: 1}}>
//                 <AddNewPost />
//                 <FormikPostUploader />
//             </SafeAreaView>
//         </ScrollView>
//     );
// }

// function Activity({navigation}) {
//     return(
//         <View style={styles.header}>
//             <Text style={styles.pageTitle}>Activity</Text>
//             <Button title="create card" onPress={() =>
//                 navigation.navigate('CreateExperience')
//             } />
//         </View>
//     );
// }

// const Stack = createNativeStackNavigator();

export const CommunityScreen = () => {
    return (
        // <NavigationContainer independent={true}>
        //     <Stack.Navigator>
        //         <Stack.Screen name="Activity" component={Activity}/>
        //         <Stack.Screen name="CreateExperience" component={CreateNewCard} />
        //     </Stack.Navigator>
        // </NavigationContainer>
        <SafeAreaView>
            <View style={styles.header}>
                <Text style={styles.pageTitle}>Activity</Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    sectionNames: {
        color: colors.eerieBlack,
        marginLeft: 20,
        paddingBottom: 10,
        fontSize: 18,
        paddingTop: 20,
    },
    header: {
        justifyContent: "center",
    },
    item: {
        backgroundColor: "#202020",
        width: 165,
        height: 220,
        borderRadius: 10,
        margin: 10,
    },
    pageTitle: {
        fontSize: 28,
        fontWeight: "bold",
    },
    groupsCoontainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: "600",
        color: "rgb(134, 100, 246)",
        marginTop: 20,
    },
});
