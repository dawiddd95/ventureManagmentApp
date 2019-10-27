import gql from 'graphql-tag';


export const ME_QUERY = gql`
   {
      me {
         id
         name
         surname
         email
      }
   }
`