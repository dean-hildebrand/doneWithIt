import React from "react";
import { View, ImageBackground } from "react-native";

export default function App() {
  return (
    <View>
      <ImageBackground
        source={require("./assets/background.jpg")}
        style={{ width: "100%", height: "100%" }}
      />
    </View>
  );
}
