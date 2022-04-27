import React, {useState} from 'react'
import {View, Text, Image, TextInput, Button, TouchableOpacity} from 'react-native'
import * as Yup from 'yup'
import {Formik} from 'formik'
import { Divider } from '@rneui/themed';
import * as ImagePicker from 'expo-image-picker';



const PLACEHOLDER_IMG = 'http://www.placecage.com/200/300'


const uploadPostSchema = Yup.object().shape({
    title: Yup.string().max(100, 'title has reached the character limit.'),
    desc: Yup.string().max(2200, 'description has reached the character limit.')
})

export const FormikPostUploader = () => {
    
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
            initialValues = {{title: '', imageUrl: '', location: '', hours: '', hashtag:'', desc: ''}}
            onSubmit={(values) => {values.imageUrl = image; 
                 console.log(values)}}
            validationSchema={uploadPostSchema}
            validateOnMount={true}
            
        >
            {({handleBlur, handleChange, handleSubmit, values, errors, isValid}) => (
                <>
                    <View style={{alignItems: 'center', margin:50}}>
                        

                        <TouchableOpacity onPress={pickImage}>
                        <Image
                            source={{uri: image ? image: PLACEHOLDER_IMG}}
                            style={{width: image ? 150: 0, height: image ? 150: 0, margin: image ? 20:0, opacity: image ? 1 : 0}}
                        />
                        </TouchableOpacity>


                        <TouchableOpacity  onPress={() => {pickImage(handleChange('imageUrl'))}}>
                            <Image style={{resizeMode: 'contain', width: image ? 0: 60,height: image ? 0: 60, opacity: image ? 0 : 1, margin: image ? 0: 20}} 
                                    source={require('../../../images/flat-color-icons_add-image.png')} 
                                    />
                        </TouchableOpacity>
                        
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


                    <View style={{flexDirection: 'row', justifyContent : 'center'}}>
                        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent : 'center', marginTop: 70, backgroundColor: '#543F9B', width: 120, paddingVertical: 8, borderRadius: 6, elevation: 10}}>
                            <Button onPress={handleSubmit} title='Post' disabled={!isValid} color='white'/>
                        </View>
                    </View>

                    
                </> 
            )}



        {/*Form, 2 textInput, caption, url*/}
        </Formik>
    )
}

export default FormikPostUploader