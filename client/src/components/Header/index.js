import React from "react";
import LoginButton from "../LoginButton";
import SignupButton from "../SignupButton";
import LogoutButton from "../LogoutButton";
import UserProfile from "../UserProfileButton";
import Auth from "../../utils/auth";

const styles = {
  buttonContainer: {
    margin: 20,
    background: "#e8eaf6",
    display: "flex",
    flexDirection: "row",
    justifyContent: "right",
  },
};

function Header({ children }) {
  return (
    <div>
      <div class="jumbotron">
        <h1 class="display-4">Bander</h1>
        <p class="lead">The premiere service for finding other musicians.</p>
        <hr class="my-4"></hr>
        <p></p>
      </div>
      <div>
        {Auth.loggedIn() ? (
          <>
            <div style={styles.buttonContainer} className="container">
              <LogoutButton></LogoutButton>
              <UserProfile></UserProfile>
            </div>
          </>
        ) : (
          <>
            <div className="container">
              <LoginButton></LoginButton>
              <SignupButton></SignupButton>
            </div>
          </>
        )}
        ;
      </div>
    </div>
  );
}

export default Header;
