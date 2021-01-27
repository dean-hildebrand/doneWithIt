import React from "react";
//uses context api to avoid prop drilling
import { useFormikContext } from "formik";

import AppTextInput from "../AppTextInput";
import ErrorMessage from "../ErrorMessage";

function AppFormField({ name, ...otherProps }) {
  const { setFieldTouched, errors, handleChange, touched } = useFormikContext();
  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        //handleChange(name) refers to initial values in Formik component
        onChangeText={handleChange(name)}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormField;
