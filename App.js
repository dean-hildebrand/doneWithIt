import React from "react";
import { Button, Image, Text, TextInput, View, Switch } from "react-native";

import * as ImagePicker from "expo-image-picker";
// import * as Permissions from "expo-permissions";

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
import AppPicker from "./app/components/AppPicker";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import ImageInput from "./app/components/ImageInput";
import ImageInputList from "./app/components/ImageInputList";
import CategoryPickerItem from "./app/components/CategoryPickerItem";
import AuthNavigator from "./app/navigation/AuthNavigator";
import { NavigationContainer } from "@react-navigation/native";

// import colors from "./config/colors";

export default function App() {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
}

// const Tweets = ({ navigation }) => (
//   <Screen>
//     <Text>Tweets</Text>
//     <Button
//       title="View Tweet"
//       onPress={() => navigation.navigate("TweetDetails", { id: 1 })}
//     />
//   </Screen>
// );
// const TweetDetails = ({ route }) => (
//   <Screen>
//     <Text>Tweet Details</Text>
//     <Text>{route.params.id}</Text>
//   </Screen>
// );

// const Account = () => (
//   <Screen>
//     <Text>Account</Text>
//   </Screen>
// );

// const Tab = createBottomTabNavigator();
// const TabNavigator = () => (
//   <Tab.Navigator>
//     <Tab.Screen name="Feed" component={StackNavigator} />
//     <Tab.Screen name="Account" component={Account} />
//   </Tab.Navigator>
// );
