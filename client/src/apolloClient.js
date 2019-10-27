import { ApolloClient } from 'apollo-client';
// 1. zamiast { createHttpLink } wpisujemy { HttpLink }
import { HttpLink } from 'apollo-link-http';
// 2. dopisujemy poniższe importy
import { ApolloLink, concat } from 'apollo-link';
import { InMemoryCache } from 'apollo-cache-inmemory';

// 3. Tworzymy nową instancję HttpLink
const httpLink = new HttpLink({ uri: '/graphql' });

// 4. Tworzymy funkcję middlewarea 
const authMiddleware = new ApolloLink((operation, forward) => {
   // add the authorization to the headers
   operation.setContext({
      headers: {
         authorization: localStorage.getItem('token') || null,
      }
   });

   return forward(operation);
})

// 5. Modernizujemy clienta apollo na poniższy
export const client = new ApolloClient({
   link: concat(authMiddleware, httpLink),
   cache: new InMemoryCache()
});