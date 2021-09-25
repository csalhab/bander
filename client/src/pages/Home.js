import React from "react";
import SignupButton from "../components/SignupButton";
import LoginButton from "../components/LoginButton";

const Home = () => {
  return (
    <div className="container">
      <LoginButton></LoginButton>
      <SignupButton></SignupButton>
    </div>
  );
};

export default Home;
