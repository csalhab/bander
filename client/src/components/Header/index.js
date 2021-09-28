import React from "react";
import LoginButton from "../LoginButton";
import SignupButton from "../SignupButton";
import UserProfile from "../UserProfileButton";
import Auth from "../../utils/auth";
import Nav from "react-bootstrap/Nav";
import LogoutButton from "../LogoutButton";
import { Link } from "react-router-dom";

const styles = {
  buttonContainer: {
    margin: 20,
    // background: "#e8eaf6",
    display: "flex",
    flexDirection: "row",
    justifyContent: "right",
  },
};

// function LogoutButton(props) {
//   const logout = (event) => {
//     event.preventDefault();
//     Auth.logout();
//   };
//   return logout;
// }

function Header({ children }) {
  return (
    <div class="bg-dark text-white">
      <div class="jumbotron bg-dark text-white" id="jumbotron">
        <h1 class="display-4">Bander</h1>
        <p class="lead">The premiere service for finding other musicians.</p>
        <hr class="my-4"></hr>
        <p></p>
      </div>
      <div>
        {Auth.loggedIn() ? (
          <>
            <nav
              id="navbar"
              class="navbar navbar-expand-lg navbar-dark bg-dark navbar-style"
            >
              <a class="navbar-brand" href="#">
                Bander
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>

              <div
                id="navbar"
                class="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item active">
                    <a class="nav-link" href="/">
                      Home <span class="sr-only">(current)</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/favorites">
                      Favorites
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/profile">
                      Profile
                    </a>
                  </li>
                  <li class="nav-item">
                    <Nav.Link onClick={() => Auth.logout()}>Logout</Nav.Link>
                  </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                  <input
                    class="form-control mr-sm-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  ></input>
                  <button
                    class="btn btn-outline-success my-2 my-sm-0"
                    id="nav-submit-btn"
                    type="submit"
                  >
                    Search
                  </button>
                </form>
              </div>
            </nav>
            <div className="container"></div>
          </>
        ) : (
          <>
            <nav class="navbar navbar-expand-lg navbar-dark text-white bg-dark navbar-style">
              <a class="navbar-brand" href="#">
                Bander
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item active">
                    <a class="nav-link" href="/">
                      Home <span class="sr-only">(current)</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/favorites">
                      Favorites
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/profile">
                      Profile
                    </a>
                  </li>
                  <li class="nav-item">
                    <Nav.Link href="/login">Login</Nav.Link>
                  </li>
                  <li class="nav-item">
                    <Nav.Link href="/signup">Sign Up</Nav.Link>
                  </li>
                </ul>
              </div>
            </nav>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
