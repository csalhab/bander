import { gql } from "@apollo/client";

export const GET_ME = gql`
  query me {
    me {
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
`;

export const QUERY_PROFILE = gql`
  query getProfile {
    getProfile {
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
