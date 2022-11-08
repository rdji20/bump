import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import * as Yup from "yup";
import { Formik } from "formik";
import { Divider } from "@rneui/themed";
import * as ImagePicker from "expo-image-picker";
import * as RequestManager from '../../../utils/RequestManager'

const PLACEHOLDER_IMG = "http://www.placecage.com/200/300";

const uploadPostSchema = Yup.object().shape({
  title: Yup.string()
    .max(100, "title has reached the character limit.")
    .required("title is required"),
  desc: Yup.string().max(2200, "description has reached the character limit."),
  //imageUrl: Yup.string().required('image is required')
});

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

    //console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const upload = (values) => {
      RequestManager.getTotalCards()
        .then(cardId => {
          const cardData = {
            card_id: cardId,
            index: cardId,
            title: values.title,
            description: values.desc,
            when: values.hours,
            where: values.location,
            category: "",
            tags: values.hashtag
          }

          const formData = new FormData(); 
          formData.append('cardImage', {
            uri: image,
            type: 'image/jpeg',
            name: cardId + '-' + values.title + '.jpg'
          });
          formData.append('cardData', JSON.stringify(cardData))
          formData.append('cardId', cardId);
          RequestManager.uploadImage(formData);
          RequestManager.addToMyCards(cardId)
        })
  }


  return (
    <Formik
      initialValues={{
        title: "",
        imageUrl: "",
        location: "",
        hours: "",
        hashtag: "",
        desc: "",
      }}
      onSubmit={(values, {resetForm}) => {
        values.imageUrl = image;
        upload(values)
        resetForm({values: ''});
        setImage(null);
      }}
      validationSchema={uploadPostSchema}
      validateOnMount={true}
    >
      {({
        handleBlur,
        handleChange,
        handleSubmit,
        values,
        errors,
        isValid,
      }) => (
        <>
          <View>
            <View style={{ alignItems: "center", margin: 50 }}>
              <TouchableOpacity onPress={pickImage}>
                <Image
                  source={{ uri: image ? image : PLACEHOLDER_IMG }}
                  style={{
                    width: image ? 150 : 0,
                    height: image ? 150 : 0,
                    margin: image ? 20 : 0,
                    opacity: image ? 1 : 0,
                  }}
                />
              </TouchableOpacity>

              <TouchableOpacity onPress={pickImage}>
                <Image
                  style={{
                    resizeMode: "contain",
                    width: image ? 0 : 60,
                    height: image ? 0 : 60,
                    opacity: image ? 0 : 1,
                    margin: image ? 0 : 20,
                  }}
                  source={require("../../../images/flat-color-icons_add-image.png")}
                />
                <Text
                  style={{
                    position: "absolute",
                    top: 15,
                    right: 10,
                    fontSize: 25,
                    opacity: image ? 0 : 1,
                    color: "red",
                  }}
                >
                  *
                </Text>
              </TouchableOpacity>
            </View>

            <Divider width={0.2} orientation="vertical" />

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 15,
                marginLeft: 20,
                marginBottom: 15,
              }}
            >
              <Text
                style={{ fontSize: 16, marginRight: 100, fontWeight: "600" }}
              >
                Title
                <Text style={{ fontSize: 15, color: "red" }}>*</Text>
              </Text>

              <TextInput
                style={{ color: "black", fontSize: 16 }}
                placeholder="Title"
                placeholderTextColor="grey"
                multiline={false}
                onChangeText={handleChange("title")}
                onBlur={handleBlur("title")}
                value={values.title}
              />
            </View>

            <Divider width={0.2} orientation="vertical" />

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 15,
                marginLeft: 20,
                marginBottom: 15,
              }}
            >
              <Text
                style={{ fontSize: 16, marginRight: 70, fontWeight: "600" }}
              >
                Location
              </Text>
              <TextInput
                style={{ color: "black", fontSize: 16 }}
                placeholder="Location"
                placeholderTextColor="grey"
                multiline={false}
                onChangeText={handleChange("location")}
                onBlur={handleBlur("location")}
                value={values.location}
              />
            </View>

            <Divider width={0.2} orientation="vertical" />

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 15,
                marginLeft: 20,
                marginBottom: 15,
              }}
            >
              <Text
                style={{ fontSize: 16, marginRight: 23, fontWeight: "600" }}
              >
                Opening hours
              </Text>
              <TextInput
                style={{ color: "black", fontSize: 16 }}
                placeholder="Opening hours"
                placeholderTextColor="grey"
                multiline={false}
                onChangeText={handleChange("hours")}
                onBlur={handleBlur("hours")}
                value={values.hours}
              />
            </View>

            <Divider width={0.2} orientation="vertical" />

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 15,
                marginLeft: 20,
                marginBottom: 15,
              }}
            >
              <Text
                style={{ fontSize: 16, marginRight: 63, fontWeight: "600" }}
              >
                Hashtags
              </Text>
              <TextInput
                style={{ color: "black", fontSize: 16 }}
                placeholder="Hashtags"
                placeholderTextColor="grey"
                multiline={false}
                onChangeText={handleChange("hashtag")}
                onBlur={handleBlur("hashtag")}
                value={values.hashtag}
              />
            </View>

            <Divider width={0.2} orientation="vertical" />

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 15,
                marginLeft: 20,
                marginBottom: 15,
              }}
            >
              <Text
                style={{ fontSize: 16, marginRight: 47, fontWeight: "600" }}
              >
                Description
              </Text>
              <TextInput
                style={{ color: "black", fontSize: 16 }}
                placeholder="Description"
                placeholderTextColor="grey"
                multiline={false}
                onChangeText={handleChange("desc")}
                onBlur={handleBlur("desc")}
                value={values.desc}
              />
            </View>

            <Divider width={0.2} orientation="vertical" />

            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 70,
                  backgroundColor: "#8664F6",
                  width: 120,
                  paddingVertical: 8,
                  borderRadius: 6,
                  elevation: 10,
                }}
              >
                <Button
                  onPress={handleSubmit}
                  title="Post"
                  disabled={!isValid}
                  color="white"
                />
              </View>
            </View>
          </View>
        </>
      )}

      {/*Form, 2 textInput, caption, url*/}
    </Formik>
  );
};

export default FormikPostUploader;