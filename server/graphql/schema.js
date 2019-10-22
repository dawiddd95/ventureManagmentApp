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

   type Query {
      loggedUser: User
      getUser(id: Int!): User
   }

   type Mutation {
      createUser(name: String!, surname: String!, email: String!, password: String!, key: String!, active: Boolean!, code: String!): User
      loginUser(email: String!, password: String!): AuthenticatedUser
      updateUser(id: Int!, name: String, surname: String, email: String, password: String, key: String, active: Boolean, code: String): [Int!]
   }
`

// potem mutację gdzie jest za dlugo przerobić na input