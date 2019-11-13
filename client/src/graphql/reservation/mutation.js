import gql from 'graphql-tag';


export const CREATE_RESERVATION_MUTATION = gql`
   mutation createReservationMutation(
      $client: String!,
      $room: String,
      $reservationStartDate: String!,
      $reservationStartTime: String!,
      $reservationEndDate: String!,
      $reservationEndTime: String!,
      $notes: String,
      $status: String,
      $employeeNotes: String,
      $cancellationNotes: String,
   ) {
      createReservation(
         client: $client,
         room: $room,
         reservationStartDate: $reservationStartDate,
         reservationStartTime: $reservationStartTime,
         reservationEndDate: $reservationEndDate,
         reservationEndTime: $reservationEndTime,
         notes: $notes,
         status: $status,
         employeeNotes: $employeeNotes,
         cancellationNotes: $cancellationNotes,
      ) {
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
      }
   }
`

export const DELETE_RESERVATIONS_MUTATION = gql`
   mutation deleteReservationsMutation($id: [Int!]!) {
      deleteReservations(id: $id) 
   }
`