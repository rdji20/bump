import { View, Text, SafeAreaView } from 'react-native';
import AddNewPost from '../sharedComponents/NewPost/AddNewPost'
import FormikPostUploader from '../sharedComponents/NewPost/FormitPostUploader'

export function ExploreScreen() {
    return(
        <SafeAreaView style={{ flex: 1}}>
            <AddNewPost/>
            <FormikPostUploader/>
        </SafeAreaView>

    )
}
