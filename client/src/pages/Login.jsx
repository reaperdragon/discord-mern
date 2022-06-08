import React, { useState } from "react";
import { AuthBox, LoginFooter, LoginHeader, LoginInputs } from "../components";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    isFormValid: false,
  });

  const handleLogin = (e) => {
    console.log("Log In");
  };

  return (
    <AuthBox>
      <LoginHeader />
      <LoginInputs values={values} setValues={setValues} />
      <LoginFooter isFormValid={values.isFormValid} handleLogin={handleLogin} />
    </AuthBox>
  );
};

export default Login;
