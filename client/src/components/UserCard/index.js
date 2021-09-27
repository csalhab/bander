import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

//  username
//  description
// email
// facts
// instrument
// bio
// zip
// category

function UserCard() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title className="name">User Name</Card.Title>
        <Card.Text className="userShortBio">User Description</Card.Text>
        <Card.Text className="userInstrument">User Instrument </Card.Text>
        <Button variant="primary">Go to Profile</Button>
      </Card.Body>
    </Card>
  );
}

export default UserCard;
