import React, {useState} from 'react'
import {View, Text, Image, TextInput, Button} from 'react-native'
import * as Yup from 'yup'
import {Formik} from 'formik'
import { Divider } from '@rneui/themed';
import * as ImagePicker from 'expo-image-picker';



const PLACEHOLDER_IMG = 'http://www.placecage.com/200/300'

const uploadPostSchema = Yup.object().shape({
    title: Yup.string().max(2200, 'title has reached the character limit.') 
})

const FormikPostUploader = () => {
    const [thumbnailUrl, setThumbnailUrl] = useState(PLACEHOLDER_IMG)
    
    const [image, setImage] = useState(null);

    const pickImage = async () => {
      // No permissions request is necessary for launching the image library
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: false,
        aspect: [4, 3],
        quality: 1,
      });
  
      console.log(result);
  
      if (!result.cancelled) {
        setImage(result.uri);
      }
    };

    return (
        <Formik
            initialValues = {{title: '', imageUrl: '', image: '', location: '', hours: '', hashtag:'', desc: ''}}
            onSubmit={(values) => console.log(values)}
            validationSchema={uploadPostSchema}
            validateOnMount={true}
        >
            {({handleBlur, handleChange, handleSubmit, values, errors, isValid}) => (
                <>


                    <View style={{alignItems: 'center', margin:30}}>
                        <Image 
                            source={{uri: image ? image : PLACEHOLDER_IMG}} 
                            style={{width: 150, height: 150}}
                        /> 
                        <Button title='choose image' onPress={pickImage}/>
                    </View>
                    
                    <Divider width={0.2} orientation='vertical'/>


                    <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 15, marginLeft: 20, marginBottom: 15}}>
                        <Text style={{fontSize:16, marginRight: 100, fontWeight: '600'}}>Title</Text>
                        <TextInput 
                            style={{color: 'black', fontSize: 16}}
                            placeholder='Title' 
                            placeholderTextColor = 'grey'
                            multiline={true}
                            onChangeText={handleChange('title')}
                            onBlur={handleBlur('title')}
                            value={(values.title)}
                        />
                    </View>

                    <Divider width={0.2} orientation='vertical'/>

                    <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 15, marginLeft: 20, marginBottom: 15}}>
                        <Text style={{fontSize:16, marginRight: 70, fontWeight: '600'}}>Location</Text>
                        <TextInput 
                            style={{color: 'black', fontSize: 16}}
                            placeholder='Location' 
                            placeholderTextColor = 'grey'
                            multiline={true}
                            onChangeText={handleChange('location')}
                            onBlur={handleBlur('location')}
                            value={(values.location)}
                        />
                    </View>

                    <Divider width={0.2} orientation='vertical'/>

                    <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 15, marginLeft: 20, marginBottom: 15}}>
                        <Text style={{fontSize:16, marginRight: 23, fontWeight: '600'}}>Opening hours</Text>
                        <TextInput 
                            style={{color: 'black', fontSize: 16}}
                            placeholder='Opening hours' 
                            placeholderTextColor = 'grey'
                            multiline={true}
                            onChangeText={handleChange('hours')}
                            onBlur={handleBlur('hours')}
                            value={(values.hours)}
                        />
                    </View>

                    <Divider width={0.2} orientation='vertical'/>

                    <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 15, marginLeft: 20, marginBottom: 15}}>
                        <Text style={{fontSize:16, marginRight: 63, fontWeight: '600'}}>Hashtags</Text>
                        <TextInput 
                            style={{color: 'black', fontSize: 16}}
                            placeholder='Hashtags' 
                            placeholderTextColor = 'grey'
                            multiline={true}
                            onChangeText={handleChange('hashtag')}
                            onBlur={handleBlur('hashtag')}
                            value={(values.hashtag)}
                        />
                    </View>

                    <Divider width={0.2} orientation='vertical'/>

                    <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 15, marginLeft: 20, marginBottom: 15}}>
                        <Text style={{fontSize:16, marginRight: 47, fontWeight: '600'}}>Description</Text>
                        <TextInput 
                            style={{color: 'black', fontSize: 16}}
                            placeholder='Description' 
                            placeholderTextColor = 'grey'
                            multiline={true}
                            onChangeText={handleChange('desc')}
                            onBlur={handleBlur('desc')}
                            value={(values.desc)}
                        />
                    </View>

                    <Divider width={0.2} orientation='vertical'/>

                    <View style={{marginTop: 50}}>
                        <Button onPress={handleSubmit} title='Post' disabled={!isValid}/>
                    </View>
                    
                    
                    
                    {/*{image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}*/}

                </> 
            )}



        {/*Form, 2 textInput, caption, url*/}
        </Formik>
    )
}

export default FormikPostUploader