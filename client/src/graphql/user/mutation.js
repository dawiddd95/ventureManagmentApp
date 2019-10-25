import gql from 'graphql-tag';


export const CREATE_USER_MUTATION = gql`
   # alias mutacji
   mutation createUserMutation($name: String!, $surname: String!, $email: String!, $password: String!) {
      # mutacja
      createUser(name: $name, surname: $surname, email: $email, password: $password) {
         # email do pokazania na <SignupSuccess />
         email
      }
   }
`

export const LOGIN_USER_MUTATION = gql`
   # alias mutacji
   mutation loginUserMutation($email: String!, $password: String!) {
      # mutacja
      loginUser(email: $email, password: $password) {
         token
         user {
            id
            name
            surname
            email
         }
      }
   }
`

export const FORGOT_USER_PASSWORD_MUTATION = gql`
   # alias mutacji
   mutation forgotUserPasswordMutation($email: String!) {
      # mutacja
      forgotUserPassword(email: $email) {
         # Tutaj zwracane dane mogą się zmienić w zależności od potrzeb
         id
         email
      }
   }
`
