import React from "react";
import { Image, StyleSheet } from "react-native";

function ViewImageScreen(props) {
  return (
    <Image
      style={{ resizeMode: "contain" }}
      source={require("../assets/chair.jpg")}
    ></Image>
  );
}

export default ViewImageScreen;
