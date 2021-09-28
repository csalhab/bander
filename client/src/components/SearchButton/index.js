import React from "react";
import Button from "react-bootstrap/Button";

function SearchButton() {
  return (
    <Button
      className="bg-dark"
      id="favorite-btn"
      as="input"
      type="submit"
      value="Submit"
    />
  );
}

export default SearchButton;
