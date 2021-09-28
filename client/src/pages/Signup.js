import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";
import { useProfileContext } from "../utils/GlobalState";

const Signup = () => {
  // set initial form state
  const [userFormData, setUserFormData] = useState({
    username: "",
    email: "",
    password: "",
    instrument: "",
    description: "",
    contact: "",
    zip: "",
  });

  //Global Context
  const [state, dispatch] = useProfileContext();

  const [addUser, { error }] = useMutation(ADD_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...userFormData },
      });

      console.log(
        "inside SignupForm.js handleFormSubmit function data: ",
        data
      );

      Auth.login(data.addUser.token);
    } catch (err) {
      console.error(err);
    }

    setUserFormData({
      username: "",
      email: "",
      password: "",
      instrument: "",
      description: "",
      contact: "",
      zip: "",
    });
  };

  return (
    <>
      <div>SIGN UP: </div>
      <Form onSubmit={handleFormSubmit}>
        <div class="form-group">
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
        <div class="form-group">
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
          <small id="emailHelp" class="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div class="form-group">
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
        <div class="form-group">
          <label htmlFor="instrument">Instrument</label>
          <input
            type="text"
            className="form-control"
            name="instrument"
            placeholder="Instrument"
            onChange={handleInputChange}
            value={userFormData.instrument}
            required
          ></input>
        </div>
        <div class="form-group">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            className="form-control"
            name="description"
            placeholder="Description"
            onChange={handleInputChange}
            value={userFormData.description}
            required
          ></input>
        </div>
        <div class="form-group">
          <label htmlFor="contact">Contact Info</label>
          <input
            type="text"
            className="form-control"
            name="contact"
            placeholder="Enter how you'd like other users to contact you:"
            onChange={handleInputChange}
            value={userFormData.contact}
            required
          ></input>
        </div>
        <div class="form-group">
          <label htmlFor="zip">ZIP Code</label>
          <input
            type="text"
            className="form-control"
            name="zip"
            placeholder="ZIP Code"
            onChange={handleInputChange}
            value={userFormData.zip}
            required
          ></input>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </Form>
    </>
  );
};

export default Signup;
