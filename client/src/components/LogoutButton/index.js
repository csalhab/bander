import React from "react";
import Button from "react-bootstrap/Button";
import Auth from "../../utils/auth";

function LogoutButton(props) {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <div className="d-grid gap-2">
      <Button href="/login" variant="primary" size="lg" onClick={logout}>
        Logout
      </Button>
    </div>
  );
}

export default LogoutButton;
