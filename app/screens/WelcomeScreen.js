import React from "react";
import { View, ImageBackground, StyleSheet, Image, Text } from "react-native";

import colors from "../config/colors";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text>Sell What You Don't Need</Text>
      </View>

      <View style={styles.loginBtn}></View>
      <View style={styles.registerBtn}></View>
    </ImageBackground>
  );
}

//rnss - shortcut for creating a style sheet
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginBtn: {
    width: "100%",
    height: 70,
    backgroundColor: colors.primary,
  },
  registerBtn: {
    width: "100%",
    height: 70,
    backgroundColor: colors.secondary,
  },
  logo: {
    height: 100,
    width: 100,
  },
  logoContainer: {
    top: 150,
    position: "absolute",
    alignItems: "center",
  },
});

export default WelcomeScreen;
