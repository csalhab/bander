import {gql} from '@apollo/client';

export const QUERY_ARTISTS = gql`
  query getArtists {
    arists{
      id
      firstName
      lastNAme
    }
  }
  `;

  export const QUERY_PROFILES = gql`
    query getProfiles {
      profiles{
        id
      }
    }
  `;

  export const QUERY_ARTIST = gql`
      query getArtist($id: Int!){
        artist(id: $id){
          id
          lastName
          firstName
        }
      }
  `;

export const QUERY_PROFILE = gql`
  query getProfile($id: Int!) {
    profile(id: $id) {
      id
      artistId
      instruments
    }
  }
`;