import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

export const ApolloAPI = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});

class API {
  constructor() {
    this.init();
  }
  init() {
    return {}
  }
}

