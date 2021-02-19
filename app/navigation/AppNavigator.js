import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import AccountScreen from "../screens/AccountScreen";
import ListingsScreen from "../screens/ListingsScreen";
import ListingEditScreen from "../screens/ListingEditScreen";

const App = createBottomTabNavigator();

const AppNavigator = () => (
  <App.Navigator>
    <App.Screen name="Account" component={AccountScreen} />
    <App.Screen name="Listing" component={ListingsScreen} />
    <App.Screen name="Listing Edit" component={ListingEditScreen} />
  </App.Navigator>
);

export default AppNavigator;
