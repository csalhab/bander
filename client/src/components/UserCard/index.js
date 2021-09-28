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
        <Card.Text className="userContact">User Contact</Card.Text>
        <Card.Text className="userZip">User Zip</Card.Text>
        <Button variant="primary">Favorite</Button>
      </Card.Body>
    </Card>
  );
}

export default UserCard;
