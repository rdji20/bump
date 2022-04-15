import React, {useState} from 'react'
import {View, Text, Image, TextInput, Button} from 'react-native'
import * as Yup from 'yup'
import {Formik} from 'formik'
import { Divider } from '@rneui/themed';



const PLACEHOLDER_IMG = 'http://www.placecage.com/200/300'

const uploadPostSchema = Yup.object().shape({
    imageUrl: Yup.string().url().required('A URL is reuired'),
    caption: Yup.string().max(2200, 'Caption has reached the character limit.') 
})

const FormikPostUploader = () => {
    const [thumbnailUrl, setThumbnailUrl] = useState(PLACEHOLDER_IMG)
    


    return (
        <Formik
            initialValues = {{caption: '', imageUrl: ''}}
            onSubmit={(values) => console.log(values)}
            validationSchema={uploadPostSchema}
            validateOnMount={true}
        >
            {({handleBlur, handleChange, handleSubmit, values, errors, isValid}) => (
                <>
                    <View style={{margin: 20, justifyContent: 'space-between', flexDirection: 'row'}}>
                        <Image 
                            source={{uri: thumbnailUrl ? thumbnailUrl : PLACEHOLDER_IMG}} 
                            style={{width: 100, height:100}}
                        />
                    <View style={{flex:1, marginLeft: 12}}>
                        <TextInput 
                            style={{color: 'black', fontSize: 20}}
                            placeholder='Write a description' 
                            placeholderTextColor = 'grey'
                            multiline={true}
                            onChangeText={handleChange('caption')}
                            onBlur={handleBlur('caption')}
                            value={(values.caption)}
                        />
                    </View>

                    </View>

                    <Divider width={0.2} orientation='vertical'/>

                    <TextInput 
                        onChange={(e) => setThumbnailUrl(e.nativeEvent.text)}
                        style={{color: 'black', fontSize: 18}}
                        placeholder='Enter Image Url' 
                        placeholderTextColor = 'grey'
                        onChangeText={handleChange('imageUrl')}
                        onBlur={handleBlur('imageUrl')}
                        value={values.imageUrl}
                    />

                    
                    {errors.imageUrl && (
                        <Text style={{fontSize: 10, color: 'red'}}>
                            {errors.imageUrl}
                        </Text>
                    )}

                    <Button onPress={handleSubmit} title='Post' disabled={!isValid}/>
                    
                </> 
            )}



        {/*Form, 2 textInput, caption, url*/}
        </Formik>
    )
}

export default FormikPostUploader