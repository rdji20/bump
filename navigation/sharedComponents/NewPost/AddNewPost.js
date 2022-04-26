import React from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'

const AddNewPost = () => (
    <View style={styles.container}>
        <Header />
        {/* FormikPostUploader */}
    </View>
)

const Header = () => (
    <View style={styles.headerContainer}>
        <TouchableOpacity>
            <Image 
                source={require('../../../images/icons8-back-30.png')}
                style= {{width:30, height: 30}}
            />
        </TouchableOpacity>
        <Text style={styles.headerText}>NEW CARD</Text>
        <Text></Text>
    </View>
)

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
    },

    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    headerText: {
        color: '#543F9B',
        fontWeight: '700',
        fontSize: 20,
        marginRight: 23,
    }

})



export default AddNewPost