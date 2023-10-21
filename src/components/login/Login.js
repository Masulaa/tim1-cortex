import React, { useState } from "react";
import "./Login.css";
import logo from "../../images/logo.png";
import TextField from "@mui/material/TextField";
import { AuthService } from "../../api/api";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isButtonActive, setButtonActive] = useState(false);

  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    setButtonActive(newEmail.includes("@") && password.length >= 8);
  };

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    setButtonActive(email.includes("@") && newPassword.length >= 8);
  };

  const userData = {
    email: email,
    password: password,
  };

  const LogIn = async () => {
    try {
      const response = await AuthService.signup(userData);
      console.log("API Response", response);
      navigate("/Home");
    } catch (error) {
      console.error("Error calling login API", error);
    }
  };

  return (
    <div className="main2">
      <div className="img"></div>
      <div className="title">
        <div className="title-welcome">Welcome</div>
        <img src={logo} alt="Logo" />
      </div>
      <section className="login-wrapper">
        <div className="input-wrapper">
          <TextField
            label="Email"
            variant="outlined"
            style={{ width: "326px" }}
            className="inputField"
            onChange={handleEmailChange}
          />
          <TextField
            type="password"
            label="Password"
            variant="outlined"
            style={{ width: "326px" }}
            className="inputField"
            onChange={handlePasswordChange}
          />
        </div>
        <div className="login-btn-part">
          <button
            className={`disabled-btn ${isButtonActive ? "active" : ""}`}
            onClick={LogIn}
            disabled={!isButtonActive}
          >
            LOG IN
          </button>
          <div className="forgot">Forgot password?</div>
        </div>
      </section>
    </div>
  );
};

export default LogIn;