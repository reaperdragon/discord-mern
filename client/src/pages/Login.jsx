import React, { useEffect, useState } from "react";
import { validateLoginForm } from "../utils/validators";
import { AuthBox, LoginFooter, LoginHeader, LoginInputs } from "../components";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setIsFormValid(validateLoginForm({ email, password }));
  }, [email, password, setIsFormValid]);

  const handleLogin = (e) => {
    console.log(email, password)
    console.log("Log In");
  };

  return (
    <AuthBox>
      <LoginHeader />
      <LoginInputs
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
      />
      <LoginFooter isFormValid={isFormValid} handleLogin={handleLogin} />
    </AuthBox>
  );
};

export default Login;
