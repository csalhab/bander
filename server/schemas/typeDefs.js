const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Category {
  _id: ID
  name: String
} 
// Artist
type Artist {
  _id: ID
  instrument: String
}

// instrument they play
type Instrument{
  _id: ID
  name: String
  category: Category
}

//  User information
type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    artist: [Artist]
  }

// auth
type Auth {
    token: ID
    user: User
  }

// query
type Query {
    categories: [Category]
    users(category: ID, name: String): [Artist]
    artist(_id: ID!): Artist
    user: User
    artist(_id: ID!): Artist
  }  

// mutation
type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addUser(instruments: [ID]!): User 
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateInstrument(_id: ID!, quantity: Int!): Instrument
    login(email: String!, password: String!): Auth
  }

  }  
`;
module.exports = typeDefs;