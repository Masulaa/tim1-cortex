import React, { useState } from "react";
import "./Login.css";
import logo from "../../images/logo.png";
import TextField from "@mui/material/TextField";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isButtonActive, setButtonActive] = useState(false);

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

  const handleSubmit = () => {
    if (isButtonActive) {
      console.log("Email: ", email, " Password: ", password);
    }
  };

  return (
    <div className="main">
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
            label="Password"
            variant="outlined"
            style={{ width: "326px" }}
            className="inputField"
            onChange={handlePasswordChange}
            type="password"
          />
        </div>
        <div
          className={`login-btn ${isButtonActive ? "active" : "disabled"}`}
          onClick={handleSubmit}
          style={{
            backgroundColor: isButtonActive ? "#BD2B2B" : "",
          }}
        >
          LOG IN
          <div className="forgot">Forgot password?</div>
        </div>
      </section>
    </div>
  );
};

export default LogIn;
