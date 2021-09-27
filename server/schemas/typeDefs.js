const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
  }

  type Profile {
    _id: ID
    available: Boolean
    zip: Int
    instrument: [String]
    category: [String]
    description: String
    image: String
    facts: String
    bio: String
    reviews: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    getProfile(_id: ID!): Profile
  }

  type Mutation {
    login(username: String!, email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addProfile(
      available: String!
      zip: Int!
      instrument: [String]!
      category: [String]!
      description: String!
      image: String!
      facts: String!
      bio: String!
    ): Profile
  }
`;
module.exports = typeDefs;
