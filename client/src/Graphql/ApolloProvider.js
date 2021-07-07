import App from "../App";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-client";

const httpLink = createHttpLink({
  uri: "http://localhost:5000/graphql",
  headers: {
    // authorizaton: token ? `Bearer ${token}` : "",
    authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGUzMDAwOWRmYTk0NTQ2YTRhMTlkZDYiLCJ0eXBlIjoidXNlciIsImlhdCI6MTYyNTQ4OTQxN30.HlR5eX5KQymHZRRL_M4x6b3u_3SI3Akh1Zq4dIjBPKg",
  },
});

const client = new ApolloClient({
  link: httpLink,
  //  authLink.concat(httpLink),
  cache: new InMemoryCache(),
  connectToDevTools: true,
});

export default (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
