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
         updatedAt
      }
   }
`

export const GET_USER_RESERVATION_QUERY = gql`
   query getUserReservationQuery($id: Int!) {
      getUserReservation(id: $id) {
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
         updatedAt
      }
   }
`