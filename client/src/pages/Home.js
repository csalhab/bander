import React from "react";
import SignupButton from "../components/SignupButton";
import LoginButton from "../components/LoginButton";
import SearchBar from "../components/SearchBar";
import SearchButton from "../components/SearchButton";
import LogoutButton from "../components/LogoutButton";
import Auth from "../utils/auth";

const Home = () => {
  if (Auth.loggedIn()) {
    return (
      <div className="container">
        <LogoutButton></LogoutButton>
        <p />
        <SearchBar></SearchBar>
        <SearchButton></SearchButton>
      </div>
    );
  } else {
    return (
      <div className="container">
        <LoginButton></LoginButton>
        <SignupButton></SignupButton>
      </div>
    );
  }
};

export default Home;
