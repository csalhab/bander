import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/auth";

const Login = () => {
  const [userFormData, setUserFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    console.log("inside LoginForm.js handleFormSubmit function!");
    console.log("inside LoginForm.js userFormData: ", userFormData);
    event.preventDefault();
    try {
      const { data } = await login({
        variables: { ...userFormData },
      });

      console.log(
        "inside LoginForm.js handleFormSubmit function, data: ",
        data
      );

      Auth.login(data.login.token);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <div>LOGIN: </div>
      <Form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="form-control"
            name="username"
            placeholder="Enter username"
            onChange={handleInputChange}
            value={userFormData.username}
            required
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            name="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={handleInputChange}
            value={userFormData.email}
            required
          ></input>
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Password"
            onChange={handleInputChange}
            value={userFormData.password}
            required
          ></input>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </Form>
      <div>
        <a href="/signup">SIGNUP instead</a>
      </div>
    </>
  );
};

export default Login;
