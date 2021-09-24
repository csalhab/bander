import React from "react";
import Button from "react-bootstrap/Button";

function LoginButton(props) {
  return (
    <div className="d-grid gap-2">
      <Button variant="primary" size="lg">
        Login
      </Button>
      {/* <Button variant="secondary" size="lg">
        Block level button
      </Button> */}
    </div>
  );
}

export default LoginButton;
