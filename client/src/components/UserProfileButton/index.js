import React from "react";
import Button from "react-bootstrap/Button";

function UserProfileButton(props) {
  return (
    <div className="d-grid gap-2">
      <Button href="/profile" variant="primary" size="lg">
        Profile
      </Button>
      {/* <Button variant="secondary" size="lg">
        Block level button
      </Button> */}
    </div>
  );
}

export default UserProfileButton;
