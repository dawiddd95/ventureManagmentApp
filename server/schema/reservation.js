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
      status: String
      employeeNotes: String
      cancellationNotes: String
      createdAt: String
      updatedAt: String
   }

   extend type Query {
      userReservations: [Reservation!]
      getUserReservation(id: Int!): Reservation 
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
         status: String
         employeeNotes: String
         cancellationNotes: String
      ): Reservation
      updateReservation(
         id: Int!
         client: String!
         room: String
         reservationStartDate: String!
         reservationStartTime: String!
         reservationEndDate: String!
         reservationEndTime: String!
         notes: String
         status: String
         employeeNotes: String
         cancellationNotes: String
      ) : [Int!]
      deleteReservations(id: [Int!]!): Int!
   }
`