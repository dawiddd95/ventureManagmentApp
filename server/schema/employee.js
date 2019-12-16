export default `
   type Employee {
      id: Int!
      userId: Int!
      name: String!
      surname: String!
      phone: String
      email: String
      active: Boolean!
      employeesAccess: Boolean!
      auditAccess: Boolean!
      clientsAccess: Boolean!
      reservationsAccess: Boolean!
      ordersAccess: Boolean!
      communicatorAccess: Boolean!
      profileAccess: Boolean!
      createdAt: String
      updatedAt: String
   }

   extend type Query {
      userEmployees: [Employee!]
   }

   extend type Mutation {
      createEmployee(
         name: String!
         surname: String!
         phone: String
         email: String
         active: Boolean!
         employeesAccess: Boolean!
         auditAccess: Boolean!
         clientsAccess: Boolean!
         reservationsAccess: Boolean!
         ordersAccess: Boolean!
         communicatorAccess: Boolean!
         profileAccess: Boolean!
      ): Employee!
      updateEmployee(
         id: Int!
         name: String!
         surname: String!
         phone: String
         email: String
         active: Boolean!
         employeesAccess: Boolean!
         auditAccess: Boolean!
         clientsAccess: Boolean!
         reservationsAccess: Boolean!
         ordersAccess: Boolean!
         communicatorAccess: Boolean!
         profileAccess: Boolean!
      ): [Int!]
      deleteEmployees(id: [Int!]!): Int!
   }
`