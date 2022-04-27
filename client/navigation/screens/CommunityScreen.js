import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { AddNewPost } from '../sharedComponents/NewPost/AddNewPost';
import FormikPostUploader from '../sharedComponents/NewPost/FormitPostUploader'

export function CommunityScreen() {
    return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <SafeAreaView style={{ flex: 1}}>
                <AddNewPost />
                <FormikPostUploader />
            </SafeAreaView>
        </View>
    )
}