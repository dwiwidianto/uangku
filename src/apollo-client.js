import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
     uri: 'https://todolist-fix.hasura.app/v1/graphql',
     cache: new InMemoryCache(),
     headers: {
          'x-hasura-admin-secret':
               '0Nspm7PDn5QVpYKtwtlFmleG2qiicfot3B2m4MRxF04rdO3rNSbnbNoMw45gQdht',
     },
});

export default client;
