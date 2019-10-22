import skip from 'graphql-resolvers'

// skip wykonuje kolejny resolver po tym resolverze, który ma skip
export const isAuthenticated = (parent, args, {userId}) => {
   if(userId) {
      skip
   } else {
      throw new Error('Unauthorized')
   }
}