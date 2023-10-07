// import React, { useState } from "react";
import { Button, Form, Input, Checkbox } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { LockOutlined, UserOutlined } from "@ant-design/icons";

import "./Login.css";

const LogIn = () => {
  const onFinish = (values) => {
    console.log( values);
    navigate("/Home");
  };
  
  const navigate = useNavigate();

  // const [userName, setUserName] = useState("");
  // const [password, setPassword] = useState("");

  // const data = {
  //   username: userName,
  //   password: password,
  // };

  // const LogIn = () => {
  //   console.log(data);
  // };

  return (
    <div className="limiter">
      <div className="container-login">
        <div className="wrap-login">
          {/* <div className="login-pic">
          <img src alt="IMG" />
        </div> */}

          <span className="login-form-title">OfficeEats</span>
          <span className="login-form-title2">Ulogujte se u svoj profil</span>

          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <Form.Item
              style={{ marginTop: "10px" }}
              name="username"
              rules={[
                {
                  required: true,
                  message: "Unesi korisničko ime!",
                },
              ]}
              hasFeedback
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
                // onChange={(e) => {
                //   setUserName(e.target.value);
                // }}
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Unesite lozinku!",
                },
              ]}
              hasFeedback
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
                // onChange={(e) => {
                // //   setPassword(e.target.value);
                // // }}
              />
            </Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                style={{
                  width: "100%",
                  padding: "0px 15px",
                  fontSize: "14px",
                }}
                // onClick={LogIn}
              >
                Log in
              </Button>
              <p style={{ marginTop: "10px" }}>
                Or <Link href="">register now!</Link>
              </p>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};
export default LogIn;
