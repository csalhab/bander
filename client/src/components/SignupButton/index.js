import React from "react";

function SignupButton(props) {
  return (
    <div className="d-grid gap-2">
      <Button variant="primary" size="lg">
        Signup
      </Button>
      {/* <Button variant="secondary" size="lg">
        Block level button
      </Button> */}
    </div>
  );
}

export default SignupButton;
