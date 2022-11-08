import React from 'react';
import {StyleSheet, View, TouchableOpacity, Animated} from 'react-native';
import {AntDesign, Entypo} from '@expo/vector-icons';


export default function AddButton(props) {
    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback style={style.button}>
                <AntDesign name='plus' size={24} color='#FFF'/>
            </TouchableWithoutFeedback>
        </View>
    )


}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        position: "absolute"
    },

    button: {
        position: "absolute",
        width: 60,
        height: 60,
        borderRadius: 60/2,
        alignItems: "center",
        justifyContent: 'center',
        shadowRadius: 10,
        shadowColor: '#F02A4B',
        shadowOpacity: 0.3,
        shadowOffset: {height: 10}

    },
    menu: {
        backgroundColor: '#F02A4B'
    }
})