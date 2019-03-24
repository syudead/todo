import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http';

const link = new HttpLink({
  uri: 'https://api.graph.cool/simple/v1/cjtmuu6if38uj0103y5qs3yjt',
})

const cache = new InMemoryCache();

const client = new ApolloClient({
  link,
  cache,
})

export default client
