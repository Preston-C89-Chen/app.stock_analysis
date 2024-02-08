import { gql } from "@apollo/client";


export const TRACKS = gql`
  query GetTracks {
    tracksForHome {
      id
      title
      thumbnail
      author {
        id
        name
        photo
      }
    }
  }
`;
