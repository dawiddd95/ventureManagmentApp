export default `
   type User {
      id: Int!
      name: String!
      surname: String!
      email: String!
      password: String!
      key: String!
      active: Boolean!
      code: String!
      createdAt: String!
      updatedAt: String!
   }

   type AuthenticatedUser {
      token: String!
      user: User!
   }

   extend type Query {
      me: User
      getUser(id: Int!): User
   }

   extend type Mutation {
      createUser(name: String!, surname: String!, email: String!, password: String!): User
      loginUser(email: String!, password: String!): AuthenticatedUser
      forgotUserPassword(email: String!): User
      updateUser(id: Int!, name: String, surname: String, email: String, password: String, key: String): [Int!]
   }
`