import React from "react";
import InputField from "./InputField";

const LoginInputs = ({ values, setValues }) => {
  return (
    <>
      <InputField
        value={values.email}
        setValue={setValues}
        label="email"
        type="email"
        placeholder="Enter and Email"
      />

      <InputField
        value={values.password}
        setValue={setValues}
        label="password"
        type="password"
        placeholder="Enter Password"
      />
    </>
  );
};

export default LoginInputs;
