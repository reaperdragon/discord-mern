import React, { useEffect, useState } from "react";
import { validateLoginForm } from "../utils/validators";
import { AuthBox, LoginFooter, LoginHeader, LoginInputs } from "../components";
import { connect } from "react-redux";
import { getActions } from "../app/actions/authActions";
import { useNavigate } from "react-router-dom";

const Login = ({ login }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setIsFormValid(validateLoginForm({ email, password }));
  }, [email, password, setIsFormValid]);

  const handleLogin = (e) => {
    const userDetails = {
      email,
      password,
    };
    login(userDetails, navigate);
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
const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

export default connect(null, mapActionsToProps)(Login);
