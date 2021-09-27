import { gql } from "@apollo/client";

export const GET_ME = gql`
  query me {
    me {
      username
      email
      savedBooks {
        authors
        description
        bookId
        image
        title
      }
    }
  }
`;

export const QUERY_PROFILE = gql`
  query getProfile {
    getProfile {
      description
    }
  }
`;
