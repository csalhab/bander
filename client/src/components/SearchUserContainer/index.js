import React, { Component } from "react";
import Container from "./Container";
import Card from "./UserCards";
import SearchForm from "./SearchForm";
import API from "../utils/API";
import UserProfile from "../../pages/UserProfile";

class SearchUserContainer extends Component {
  state = {
    result: {},
    search: ""
  };


  searchUsers = query => {
    API.search(query)
      .then(res => this.setState({ result: res.data }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchUsers(this.state.search);
  };

  render() {
    return (
      <Container>
            <Card
              heading={this.state.result.Title || "Search for a User"}
            >
              {this.state.result.Title ? (
                <UserProfile
                  name={this.state.result.Name}
                  src={this.state.result.Instrument}
                  city={this.state.result.City}
                  genre={this.state.result.Genre}
                />
              ) : (
                <h3>No Results to Display</h3>
              )}
            </Card>

            <Card heading="Search">
              <SearchForm
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
            </Card>
      </Container>
    );
  }
}

export default SearchUserContainer;
