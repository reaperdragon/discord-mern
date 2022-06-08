import React from "react";
import CustomPrimaryButton from "./CustomPrimaryButton";

const LoginFooter = ({ handleLogin, isFormValid }) => {
  return (
    <div>
      <CustomPrimaryButton
        label="Login"
        additionalStyles={{ marginTop: "30px" }}
        disabled={!isFormValid}
        onClick={handleLogin}
      />
    </div>
  );
};

export default LoginFooter;
