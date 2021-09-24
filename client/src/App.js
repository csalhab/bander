steph-routers
import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Search from "./pages/Search";
import UserProfile from "./pages/UserProfile";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container">
            <Route exact path="/">
              <Home />
            </Route>
            {/* Create a route to display a User's comments based on its `UserID` provided in the URL */}
            <Route exact path="/UserProfile/:thoughtId">
              <SingleThought />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>

import logo from "./logo.svg";
import "./App.css";
import LoginButton from "./components/LoginButton";
import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCards";
import SearchButton from "./components/SearchButton";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <LoginButton>Login</LoginButton>
        <SearchBar>SearchBar</SearchBar>
        <UserCard></UserCard>
        <SearchButton></SearchButton>
      </header>
    </div>
main
  );
}

export default App;
