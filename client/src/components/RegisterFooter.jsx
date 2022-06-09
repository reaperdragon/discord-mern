import React from "react";
import { RedirectInfo } from ".";
import CustomPrimaryButton from "./CustomPrimaryButton";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "@mui/material";

const NotValidMessage = () => {
  return "Username should contains between 3 and 12 characters and password should contains between 6 and 12 character. Also correct e-mail address should provided";
};

const ValidMessage = () => {
  return "Press to register!";
};

const RegisterFooter = ({ handleRegister, isFormValid }) => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    navigate("/login");
  };

  return (
    <>
      <Tooltip title={!isFormValid ? NotValidMessage() : ValidMessage()}>
        <div>
          <CustomPrimaryButton
            label="Register"
            additionalStyles={{ marginTop: "30px" }}
            disabled={!isFormValid}
            onClick={handleRegister}
          />
        </div>
      </Tooltip>
      <RedirectInfo
        text="Already Have an Account? "
        redirectText="Log In"
        additionalStyles={{ marginTop: "5px" }}
        redirectHandler={handleLogin}
      />
    </>
  );
};

export default RegisterFooter;
