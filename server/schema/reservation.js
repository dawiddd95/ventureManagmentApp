export default `
   type Reservation {
      id: Int!
      userId: Int!
      client: String!
      room: String
      reservationStartDate: String!
      reservationStartTime: String!
      reservationEndDate: String!
      reservationEndTime: String!
      notes: String
      status: String!
      employeeNotes: String
      cancellationNotes: String
   }

   extend type Query {
      allReservations: [Reservation!]
   }
   
   extend type Mutation {
      createReservation(
         client: String!
         room: String
         reservationStartDate: String!
         reservationStartTime: String!
         reservationEndDate: String!
         reservationEndTime: String!
         notes: String
         status: String!
         employeeNotes: String
         cancellationNotes: String
      ): Reservation
   }
`

// 0. do type Reservation dopisujemy relacje na usera user: User!  
// 1. Przy tworzeniu rezerwacji createReservation() nie podajemy userId