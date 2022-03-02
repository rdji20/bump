
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import React, { useState } from 'react';

export function ProfileScreen() {

    const Tab = createMaterialTopTabNavigator();

    [tabState, setTabState] = useState(false);

    const SavedCards = () => {
        return (<View style={{width: '100%', height: '100%'}}>
                    <Text>Here are my saved cards</Text>
                </View>)
    }

    const MyCards = () => {
        return (<View style={{flexDirection: 'row', justifyContent:'center', alignItems: 'center', width: '100%', height: '66%'}} >
                    <Text>No Cards Yet</Text>
                </View>)
    }

    const selectSavedCards = () => {
        if (tabState !== true) setTabState(true);
    }

    const selectMyCards = () => {
        if (tabState !== false) setTabState(false);
    }

    return(
        <View style={styles.main}>
                <View style={{flexDirection: 'row', justifyContent: 'center', paddingTop: 15}}>
                    <Image style={styles.pfp} source={require('../../images/pfp.jpg')} />
                    <View style={{justifyContent: 'center', padding: 15}}>
                        <Text style={styles.name}>Neema Shokri</Text>
                        <Text style={styles.stats}>0 Points</Text>
                        <Text style={styles.stats}>0 Acheivements</Text>
                    </View>
                </View>
                <View style={{flexDirection: 'row', paddingTop: 20, paddingBottom: 20, justifyContent: 'space-between'}}>
                    <Text style={styles.tag}>Foodie </Text>
                    <Text style={styles.tag}>animal lover</Text>
                    <Text style={styles.tag}>Cooking/Baking</Text>
                </View>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <Pressable style={(tabState) ? styles.activeButton : styles.button} title="Saved Cards" onPress={selectSavedCards}><Text>Saved Cards</Text></Pressable>
                <Pressable style={(!tabState) ? styles.activeButton : styles.button} title="My Cards" onPress={selectMyCards}><Text>My Cards</Text></Pressable>
            </View>
            {tabState ? <SavedCards /> : <MyCards />}
        </View>
    )
}

const styles = StyleSheet.create({
    activeButton: {
        borderBottomColor: 'rgb(0, 0, 0)',
        borderBottomWidth: 3,
        flex: 1,
        alignItems: 'center',
        padding: 10

    },
    button: {
        flex: 1,
        alignItems: 'center',
        padding: 10
    },
    main: {
        paddingTop: 100,
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'column'
    },
    name: {
        fontWeight: 'bold',
        fontSize: 24
    },
    stats: {
        fontSize: 16
    },
    pfp: {
        maxWidth: 120,
        maxHeight: 120,
        borderRadius: 60 
    },
    tag: {
        backgroundColor: 'lightgray',
        fontSize: 16,
        padding: 5,
        borderRadius: 50,
        margin: 3
    }
})