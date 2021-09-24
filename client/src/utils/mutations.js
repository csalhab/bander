import { gql } from '@apollo/client';

export const CREATE_PROFILE = gql`
  mutation createProfile($profile: ProfileData) {
    createProfile(profile: $profile) {
      success
      profile {
        id
      }
    }
  }
`;

export const ADD_ARTIST = gql`
  mutation addArtist($artist: ArtistData!) {
    createArtist(artist: $artist) {
      success
      artist {
        id
      }
    }
  }
`;
