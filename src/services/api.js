import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

// Link da API GraphQL do GitHub
const httpLink = createHttpLink({
  uri: 'https://api.github.com/graphql',
});

// Middleware de autenticação
const authLink = setContext((_, { headers }) => {
  const token = 'KEY_GITHUB';
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  };
});

// Configuração do Apollo Client
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
