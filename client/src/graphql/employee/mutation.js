import gql from 'graphql-tag';


export const CREATE_EMPLOYEE_MUTATION = gql`
   mutation createEmployeeMutation(
      $name: String!
      $surname: String!
      $phone: String
      $email: String
      $active: Boolean!
      $employeesAccess: Boolean!
      $auditAccess: Boolean!
      $clientsAccess: Boolean!
      $reservationsAccess: Boolean!
      $ordersAccess: Boolean!
      $communicatorAccess: Boolean!
      $profileAccess: Boolean!
   ) {
      createEmployee(
         name: $name,
         surname: $surname,
         phone: $phone, 
         email: $email,
         active: $active,
         employeesAccess: $employeesAccess,
         auditAccess: $auditAccess,
         clientsAccess: $clientsAccess,
         reservationsAccess: $reservationsAccess,
         ordersAccess: $ordersAccess,
         communicatorAccess: $communicatorAccess,
         profileAccess: $profileAccess,
      ) {
         name
         surname
         phone
         email
         active
         employeesAccess
         auditAccess
         clientsAccess
         reservationsAccess
         ordersAccess
         communicatorAccess
         profileAccess
      }
   }
`

export const UPDATE_EMPLOYEE_MUTATION = gql`
   mutation updateEmployeeMutation(
      $id: Int!,
      $name: String!
      $surname: String!
      $phone: String
      $email: String
      $active: Boolean!
      $employeesAccess: Boolean!
      $auditAccess: Boolean!
      $clientsAccess: Boolean!
      $reservationsAccess: Boolean!
      $ordersAccess: Boolean!
      $communicatorAccess: Boolean!
      $profileAccess: Boolean!
   ) {
      updateEmployee(
         id: $id,
         name: $name,
         surname: $surname,
         phone: $phone, 
         email: $email,
         active: $active,
         employeesAccess: $employeesAccess,
         auditAccess: $auditAccess,
         clientsAccess: $clientsAccess,
         reservationsAccess: $reservationsAccess,
         ordersAccess: $ordersAccess,
         communicatorAccess: $communicatorAccess,
         profileAccess: $profileAccess,
      ) {
         name
         surname
         phone
         email
         active
         employeesAccess
         auditAccess
         clientsAccess
         reservationsAccess
         ordersAccess
         communicatorAccess
         profileAccess
      }
   }
`

export const DELETE_EMPLOYEES_MUTATION = gql`
   mutation deleteEmployeesMutation($id: [Int!]!) {
      deleteEmployees(id: $id) 
   }
`