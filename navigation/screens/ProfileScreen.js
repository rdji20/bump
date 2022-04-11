
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import React, { useState } from 'react';
import Card from '../sharedComponents/card' 

export function ProfileScreen() {

    const Tab = createMaterialTopTabNavigator();

    [tabState, setTabState] = useState(false);

    const SavedCards = () => {
        return (<View style={{flexDirection: 'row', justifyContent:'start', alignItems: 'left', width: '100%', height: '100%'}}>
                    <Card>
                        <View style={{width: '100%', height:'85%'}}>
                            <Image style= {{flex:1 , width: undefined, height: undefined}} source={require('../../images/Snoqualmie_Falls.png')}/>
                        </View>
                        <Text style={{flex:1}}>Snoqualmie Falls</Text>
                    </Card>

                    <Card>
                        <View style={{width: '100%', height:'85%'}}>
                            <Image style= {{flex:1 , width: undefined, height: undefined}} source={require('../../images/food-and-drink.png')}/>
                        </View>
                        <Text style={{flex:1}}>Food and Drinks</Text>
                    </Card>

                </View>)
    }

    const MyCards = () => {
        return (<View style={{flexDirection: 'row', justifyContent:'start', alignItems: 'left', width: '100%', height: '66%'}} >
                    <Card>
                        <View style={{width: '100%', height:'85%'}}>
                            {<Image style= {{flex:1 , width: undefined, height: undefined}} source={require('../../images/KerryPark.png')}/>}
                        </View>
                        <Text style={{flex:1}}>Enjoy Seattle's View</Text>
                    </Card>

                    <Card>
                        <View style={{width: '100%', height:'85%'}}>
                            <Image style= {{flex:1 , width: undefined, height: undefined}} source={require('../../images/candle.png')}/>
                        </View>
                        <Text style={{flex:1}}>Make a candle</Text>
                    </Card>

                    
                    
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
                    <Image style={styles.pfp} source={require('../../images/sample-sarah.png')} />
                    <View style={{justifyContent: 'center', padding: 15}}>
                        <Text style={styles.name}>Sarah Hayes</Text>
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
        backgroundColor: '#BEA4F5',
        fontSize: 16,
        padding: 5,
        borderRadius: 50,
        margin: 3
    },

    savedCardImg: {
        maxWidth: 5,
        maxHeight: 5,

    }

})