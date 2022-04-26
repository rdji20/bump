<<<<<<< HEAD

import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Entypo, MaterialCommunityIcons, Ionicons, Foundation, Feather } from '@expo/vector-icons';
=======
import { View, Text, SafeAreaView } from 'react-native';
import AddNewPost from '../sharedComponents/NewPost/AddNewPost'
import FormikPostUploader from '../sharedComponents/NewPost/FormitPostUploader'
>>>>>>> 0a4270dd99532a69247af0312de725c67d9c2dcb

export function ExploreScreen() {

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
                            <Foundation name="trees" size={18} color="white" style={styles.contentIcons} />
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
                        <Text style={styles.text}>#nature #view #waterfall #outdoor</Text>
                    </View>
                    <View style={{position: 'absolute', alignSelf: 'flex-end', paddingRight: 25}}>
                        <MaterialCommunityIcons name="bookmark-outline" size={30} color='white' style={styles.buttonIcons} />
                        <Feather name='x-square' size={30} color='white' style={styles.buttonIcons} />
                        <Feather name='info' size={30} color='white' style={styles.buttonIcons} />
                        <Entypo name="dots-three-horizontal" size={30} color="white" style = {styles.buttonIcons} />
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
                    <Text style={styles.tabs}>Nightlife</Text>
                    <Text style={[styles.tabs, {color: 'rgb(134, 100, 246)', textDecorationLine: 'underline', textDecorationColor: 'rgb(134, 100, 246)'}]}>Experiences</Text>
                    <Text style={styles.tabs}>Food</Text>
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
        paddingVertical: 5
    },
    contentIcons: {
        paddingRight: 5,
        paddingTop: 3
    }
})
