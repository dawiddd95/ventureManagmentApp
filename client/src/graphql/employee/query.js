import gql from 'graphql-tag';


export const USER_EMPLOYEES_QUERY = gql`
   {
      userEmployees {
         id
         userId
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
         createdAt
         updatedAt   
      }
   }
`