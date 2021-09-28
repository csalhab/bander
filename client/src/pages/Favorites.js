import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Favorites = () => {
  return (
    <div className="container">
      <div class="col-sm">
        <Card
          id="red-border"
          className="bg-dark text-white"
          style={{ width: "18rem" }}
        >
          <Card.Body>
            <Card.Title className="name">Adam Jones</Card.Title>
            <Card.Text className="userShortBio">
              If you've played in 4/4 in the last 7 years, don't bother.
            </Card.Text>
            <Card.Text className="userInstrument">Guitar </Card.Text>
            <Card.Text className="userContact">adamjones@tool.net</Card.Text>
            <Button className="bg-dark" id="favorite-btn" variant="primary">
              Favorite
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Favorites;
