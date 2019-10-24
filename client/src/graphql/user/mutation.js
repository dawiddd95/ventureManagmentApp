import gql from 'graphql-tag'

export const FORGOT_USER_PASSWORD_MUTATION = gql`
   # alias mutacji
   mutation forgotUserPasswordMutation($email: String!) {
      # mutacja
      forgotUserPassword(email: $email) {
         id
         email
      }
   }
`
