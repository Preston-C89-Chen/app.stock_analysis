import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { gql } from "@apollo/client";

export const api = createApi({
  reducerPath: 'earningsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: ''
  }),
})
// export const ApolloAPI = new ApolloClient({
//   uri: "http://localhost:4000",
//   cache: new InMemoryCache(),
// });

// class API {
//   constructor() {
//     this.init();
//   }
//   init() {
//     return {}
//   }
// }

