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