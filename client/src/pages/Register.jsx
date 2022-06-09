import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import { validateRegisterForm } from "../utils/validators";
import { AuthBox, RegisterFooter, RegisterInputs } from "../components";
import { connect } from "react-redux";
import { getActions } from "../app/actions/authActions";
import { useNavigate } from "react-router-dom";

const Register = ({register}) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [isFormValid, setIsFormValid] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setIsFormValid(validateRegisterForm({ email, password, username }));
  }, [email,username, password, setIsFormValid]);

  const handleRegister = (e) => {
   const userDetails =  {email, username, password};
    register(userDetails,navigate)
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

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

export default connect(null, mapActionsToProps)(Register);
