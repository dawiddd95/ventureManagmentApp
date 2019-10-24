import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

const httpLink = createHttpLink({
   // dla apollo-server po stronie backendu
   // uri: 'http://localhost:5000'
   // dla graphql-express po stronie bakcendu
   uri: 'http://localhost:5000/graphql'
})

export const client = new ApolloClient({
   link: httpLink,
   cache: new InMemoryCache()
})
