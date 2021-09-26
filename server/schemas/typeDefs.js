const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
  }

  type Profile {
    available: Boolean
    zip: Int
    instrument: [String]
    category: [String]
    description: String
    image: String
    facts: String
    bio: String
    reviews: String
    user: User
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    login(username: String!, email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
  }
`;
module.exports = typeDefs;
