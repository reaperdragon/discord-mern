import React from "react";
import InputField from "./InputField";

const LoginInputs = ({ email, setEmail, password, setPassword }) => {
  return (
    <>
      <InputField
        value={email}
        setValue={setEmail}
        label="email"
        type="email"
        placeholder="Enter and Email"
      />

      <InputField
        value={password}
        setValue={setPassword}
        label="password"
        type="password"
        placeholder="Enter Password"
      />
    </>
  );
};

export default LoginInputs;
