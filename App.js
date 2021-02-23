import React from "react";
import { Button, Image, Text, TextInput, View, Switch } from "react-native";
import AuthNavigator from "./app/navigation/AuthNavigator";
import { NavigationContainer } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
// import * as Permissions from "expo-permissions";

import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";

// import colors from "./config/colors";

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}
