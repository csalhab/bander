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
        <SearchBar></SearchBar>
        <SearchButton></SearchButton>
        <div>you are logged in, info to be added ..</div>
      </div>
    );
  } else {
    return (
      <div className="container">
        <div>you are logged out, info to be added ..</div>
      </div>
    );
  }
};

export default Home;
