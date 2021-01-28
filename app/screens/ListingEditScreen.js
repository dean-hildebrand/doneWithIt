import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
// import AppFormPicker from "../components/forms/AppFormPicker";

import Screen from "../components/Screen";
import { AppForm as Form } from "../components/forms/index";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().label("Title"),
  price: Yup.string().required().min(1).max(10000).label("Price"),
  category: Yup.string().required().nullable().nullable().label("Categor"),
  description: Yup.string().label("Description"),
});

export default function ListingEditScreen() {
  return (
    <Screen>
      <Form />
    </Screen>
  );
}

const styles = StyleSheet.create({});
