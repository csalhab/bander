import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($username: String!, $email: String!, $password: String!) {
    login(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        zip
        instrument
        category
        description
        image
        facts
        bio
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const ADD_PROFILE = gql`
  mutation updateUserProfile(
    $zip: String
    $instrument: [String]
    $category: [String]
    $description: String
    $image: String
    $facts: String
    $bio: String
  ) {
    updateUserProfile(
      zip: $zip
      instrument: $instrument
      category: $category
      description: $description
      image: $image
      facts: $facts
      bio: $bio
    ) {
      _id
      username
      email
      password
      zip
      instrument
      category
      description
      image
      facts
      bio
    }
  }
`;
