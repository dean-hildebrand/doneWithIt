import React from "react";
import { Image, View, StyleSheet, Text, SafeAreaView } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ListItem from "../components/lists/ListItem";

function MyAccountScreen(props) {
  return (
    <ListItem
      image={require("../assets/mosh.jpg")}
      title="Dean Hildebrand"
      subTitle="dean.hildebrand88@gmail.com"
    />
    // <SafeAreaView>
    //   <View style={styles.userInfo}>
    //     <Image style={styles.image} source={require("../assets/mosh.jpg")} />
    //     <Text style={styles.user}>Dean Hildebrand</Text>
    //     <Text>dean.hildebrand88@gmail.com</Text>
    //   </View>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  user: {
    fontWeight: "700",
  },
  userInfo: {
    display: "flex",
  },
});

export default MyAccountScreen;
