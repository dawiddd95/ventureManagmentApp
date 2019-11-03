import userSchema from './user'
import reservationSchema from './reservation'

const linkSchema = `
   type Query {
      _: Boolean
   }

   type Mutation {
      _: Boolean
   }
`

export default [linkSchema, userSchema, reservationSchema]