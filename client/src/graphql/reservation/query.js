import gql from 'graphql-tag';


export const USER_RESERVATIONS_QUERY = gql`
   {
      userReservations {
         id
         userId
         client
         client
         room
         reservationStartDate
         reservationStartTime
         reservationEndDate
         reservationEndTime
         notes
         status
         employeeNotes
         cancellationNotes
         createdAt
      }
   }
`