import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import { validateRegisterForm } from "../utils/validators";
import { AuthBox, RegisterFooter, RegisterInputs } from "../components";

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setIsFormValid(validateRegisterForm({ email, password, username }));
  }, [email,username, password, setIsFormValid]);

  const handleRegister = (e) => {
    console.log(email, username, password);
    console.log("Register");
  };

  return (
    <AuthBox>
      <Typography variant="h5" sx={{ color: "white" }}>
        Create an Account
      </Typography>
      <RegisterInputs
        email={email}
        setEmail={setEmail}
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
      />
      <RegisterFooter
        isFormValid={isFormValid}
        handleRegister={handleRegister}
      />
    </AuthBox>
  );
};

export default Register;
