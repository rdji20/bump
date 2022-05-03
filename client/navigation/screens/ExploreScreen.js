
import React from 'react';
import { Entypo, Feather, Foundation, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Image, ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export function ExploreScreen() {

    const [saved, setSaved] = React.useState(false)

    const Card = () => {
       return(
            <View style={{backgroundColor: 'white', marginBottom: '2%', shadowColor: 'black', shadowOpacity: .5}}>
                <Image source={require('../../images/Snoqualmie_Falls.png')}
                    style={{width: '100%', resizeMode: 'cover', aspectRatio: 1}} />
                <View style={{position: 'absolute', 
                    justifyContent: 'flex-end',
                    width: '100%',
                    height: '100%'}}>
                    <LinearGradient 
                        colors={['transparent', 'rgba(0, 0, 0, 0.9)']} 
                        style={{height: '40%'}} >
                    <View style={{position: 'absolute', paddingLeft: 25, paddingTop: '30%'}}>
                        <View style={{flexDirection: 'row'}}>
                            {/* <Foundation name="trees" size={18} color="white" style={styles.contentIcons} /> */}
                            <Text style={styles.text}>Snoqualmie Falls</Text>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <Ionicons name='location-sharp' size={18} color='white' style={styles.contentIcons} />
                            <Text style={styles.text}>Snoqualmie</Text>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <Foundation name="clock" size={18} color="white" style={styles.contentIcons} />
                            <Text style={styles.text}>24 hours</Text>
                        </View>
                        <TouchableOpacity onPress={() => console.log("click")}>
                            <Text style={styles.text}>Snoqualmie Falls is a 268-foot...</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{position: 'absolute', alignSelf: 'flex-end', paddingRight: 25}}>
                        <TouchableOpacity onPress={() => setSaved(!saved)}>
                            <MaterialIcons name={saved ?"bookmark":"bookmark-outline"} size={35} color={saved?'rgb(95,150,254)':"white"} style={styles.buttonIcons}/>
                        </TouchableOpacity>
                        <TouchableOpacity >
                            <Feather name='thumbs-down' size={30} color='white' style={styles.buttonIcons} />
                        </TouchableOpacity>
                        <Entypo name="dots-three-horizontal" size={25} color="white" style = {styles.buttonIcons} />
                    </View>
                    </LinearGradient>
                </View>
            </View>
       ) 
    };

    let cards = [];
    for (let i = 0; i < 10; i++) {
        cards.push(<Card key={i}/>)
    }

    const Header = () => {
        return(
            <View>
                <View style={{paddingLeft: 30, paddingBottom: 20, flexDirection: 'column', justifyContent: 'flex-start', width: '100%'}}>
                    <Text style={styles.title}>Explore</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-around', width: '100%'}}>
                    <Text style={styles.tabs}>Food</Text>
                    <Text style={[styles.tabs, {color: 'rgb(134, 100, 246)', textDecorationLine: 'underline', textDecorationColor: 'rgb(134, 100, 246)'}]}>Experiences</Text>
                    <Text style={styles.tabs}>Event</Text>
                </View>
            </View>
        )
    }

    return(
        <View style={{justifyContent: 'center', alignItems: 'center', marginTop: '15%'}}>
            <Header />
            <ScrollView style={styles.scrollContainer}
                snapToAlignment={'start'}
                decelerationRate={"fast"}
                snapToInterval={547}
                disableScrollViewPanResponder={true}>
                    {cards}
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    scrollContainer: {
        marginTop: '10%',
        width: '100%'
    },
    tabs: {
        fontSize: 18,
        fontWeight: '500'
    },
    title: {
        fontSize: 24,
        fontWeight: '600',
        color: 'rgb(134, 100, 246)'
    },
    text: {
        fontSize: 14,
        color: 'rgb(255, 255, 255)',
        paddingVertical: 5
    },
    buttonIcons: {
        paddingVertical: 10
    },
    contentIcons: {
        paddingRight: 5,
        paddingTop: 3
    }
})
