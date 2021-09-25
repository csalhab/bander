import React from "react";
import SignupButton from "../components/SignupButton";
import LoginButton from "../components/LoginButton";
import SearchBar from "../components/SearchBar";
import SearchButton from "../components/SearchButton";

const Home = () => {
  return (
    <div className="container">
      <LoginButton></LoginButton>
      <SignupButton></SignupButton>
      <SearchBar></SearchBar>
      <SearchButton></SearchButton>
    </div>
  );
};

export default Home;
