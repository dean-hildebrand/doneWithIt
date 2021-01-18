import React from "react";
import { Text, View } from "react-native";
import AppButton from "./app/components/AppButton";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

// import colors from "./config/colors";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>
        <AppButton
          title="Login"
          onPress={() => console.log("pressing button")}
        />
        ;
      </Text>
    </View>
  );
}
