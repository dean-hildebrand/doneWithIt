import React, { useState, useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import { View, StyleSheet, Button, Image } from "react-native";

import Screen from "./Screen";
import { TouchableOpacity } from "react-native-gesture-handler";

function ImageInput(props) {
  const [imageUri, setImageUri] = useState();
  const requestPermission = async () => {
    const result = await ImagePicker.requestCameraPermissionsAsync();
    if (!result.granted)
      alert("You need to enable permisson to access your photos");
  };

  //cannot use async await in useEffect, created separate function and called in useEffect
  useEffect(() => {
    requestPermission();
  }, []);

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.cancelled) setImageUri(result.uri);
    } catch (error) {
      console.log("Error reading image", error);
    }
  };

  const removeImage = (image) => {
    console.log("image");
  };

  return (
    <Screen>
      <Button title="Select Image" onPress={selectImage} />
      <TouchableOpacity onPress={removeImage}>
        <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />
      </TouchableOpacity>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default ImageInput;
