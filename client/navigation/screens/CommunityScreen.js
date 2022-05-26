import React from 'react';
import { View, SafeAreaView, ScrollView } from 'react-native';
import { AddNewPost } from '../sharedComponents/NewPost/AddNewPost';
import FormikPostUploader from '../sharedComponents/NewPost/FormitPostUploader'

export function CommunityScreen() {
    return(
        <ScrollView>
            <SafeAreaView style={{ flex: 1}}>
                <AddNewPost />
                <FormikPostUploader />
            </SafeAreaView>
        </ScrollView>
    )
}