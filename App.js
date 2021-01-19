import React from "react";
import { Text, View } from "react-native";
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

import AppText from "./app/components/AppText";

// import colors from "./config/colors";

export default function App() {
  return (
    <View
      style={{
        backgroundColor: "#DFDBDB",
        padding: 20,
        paddingTop: 100,
      }}
    >
      <Card
        title="Red Jacket for sale"
        subTitle="$100"
        image={require("./app/assets/jacket.jpg")}
      />
    </View>
  );
}
