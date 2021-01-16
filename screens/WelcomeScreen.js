import React from "react";
import { View, ImageBackground } from "react-native";

function WelcomeScreen() {
  return (
    <View>
      <ImageBackground source={require("../assets/background.jpg")} />
    </View>
  );
}

export default WelcomeScreen;
