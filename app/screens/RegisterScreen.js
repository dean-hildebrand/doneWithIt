import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import {
  AppForm as Form,
  AppFormField as FormField,
  SubmitButton,
} from "../components/forms";
import AppButton from "../components/AppButton";

//sets form validation schema from "yup"
const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen(props) {
  return (
    <Screen style={styles.container}>
      <Form
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <FormField
          name="name"
          icon="account"
          autoCorrect={false}
          placeholder="Name"
        />
        <FormField
          keyboardType="email-address"
          name="email"
          icon="email"
          autoCorrect={false}
          placeholder="Email"
          textContentType="emailAddress"
        />
        <FormField
          autoCapitalize="none"
          secureTextEntry
          textContentType="password"
          name="password"
          icon="lock"
          autoCorrect={false}
          placeholder="Password"
        />
      </Form>
      {/* needs to be SubmitButton but doesnt like useFormikContext */}
      <AppButton title="Register" />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default RegisterScreen;
