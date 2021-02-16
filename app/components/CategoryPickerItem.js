import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppText from "./AppText";
import Icon from "./Icon";

export default function CategoryPickerItem({ item, onPress }) {
  console.log(item);
  return (
    <View style={styles.container}>
      <Icon
        onPress={onPress}
        backgroundColor={item.backgroundColor}
        name={item.icon}
        size={80}
      />
      <Text style={styles.label}>{item.label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    alignItems: "center",
    width: "33%",
  },
  label: {
    marginTop: 5,
    textAlign: "center",
  },
});
