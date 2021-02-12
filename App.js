import React, { useState, useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
// import * as Permissions from "expo-permissions";

import { Button, Image, Text, TextInput, View } from "react-native";
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import MyAccountScreen from "./app/screens/MyAccountScreen";
import Icon from "./app/components/Icon";
import Screen from "./app/components/Screen";
import ListItem from "./app/components/lists/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import { Switch } from "react-native";
import AppPicker from "./app/components/AppPicker";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import ImageInput from "./app/components/ImageInput";

// import colors from "./config/colors";

export default function App() {
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

  return (
    <Screen>
      <ImageInput
        imageUri={imageUri}
        onChangeImage={(uri) => setImageUri(uri)}
      />
    </Screen>
  );
}
