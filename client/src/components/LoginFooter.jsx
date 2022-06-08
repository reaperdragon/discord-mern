import React from "react";
import { RedirectInfo } from ".";
import CustomPrimaryButton from "./CustomPrimaryButton";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "@mui/material";

const NotValidMessage = () => {
  return "Enter correct e-mail address and password should contains between 8 and 12 characters";
};

const ValidMessage = () => {
  return "Press to log in!";
};

const LoginFooter = ({ handleLogin, isFormValid }) => {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    navigate("/register");
  };

  return (
    <>
      <Tooltip title={!isFormValid ? NotValidMessage() : ValidMessage()}>
        <div>
          <CustomPrimaryButton
            label="Login"
            additionalStyles={{ marginTop: "30px" }}
            disabled={!isFormValid}
            onClick={handleLogin}
          />
        </div>
      </Tooltip>
      <RedirectInfo
        text="Need an Account? "
        redirectText="Create and Account"
        additionalStyles={{ marginTop: "5px" }}
        redirectHandler={handleRegister}
      />
    </>
  );
};

export default LoginFooter;
