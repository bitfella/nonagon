import { createAction } from 'redux-api-middleware';
import { isEmpty } from 'lodash-es';
import { playlistLoading, getPlaylistData } from 'selectors/playlist';
import {
  spotifyWebApiCreatePlaylistEndpoint,
  spotifyWebApiAddTrackToPlaylistEndpoint,
  spotifyWebApiGetPlaylistImagesEndpoint
} from 'config/spotify';

export const SET_PLAYLIST_AVAILABILITY = 'app/playlist/SET_AVAILABILITY';
export const CREATE_PLAYLIST_REQUEST = 'app/playlist/CREATE_REQUEST';
export const CREATE_PLAYLIST_RECEIVE = 'app/playlist/CREATE_RECEIVE';
export const CREATE_PLAYLIST_FAILURE = 'app/playlist/CREATE_FAILURE';
export const ADD_TRACK_TO_PLAYLIST_REQUEST = 'app/playlist/tracks/ADD_REQUEST';
export const ADD_TRACK_TO_PLAYLIST_RECEIVE = 'app/playlist/tracks/ADD_RECEIVE';
export const ADD_TRACK_TO_PLAYLIST_FAILURE = 'app/playlist/tracks/ADD_FAILURE';
export const GET_PLAYLIST_IMAGES_REQUEST = 'app/playlist/images/GET_REQUEST';
export const GET_PLAYLIST_IMAGES_RECEIVE = 'app/playlist/images/GET_RECEIVE';
export const GET_PLAYLIST_IMAGES_FAILURE = 'app/playlist/images/GET_FAILURE';

export const setPlaylistAvailability = value => ({
  type: SET_PLAYLIST_AVAILABILITY,
  payload: value
});

export const createPlaylist = (
  token,
  userId,
  name,
  description,
  isPublic = false
) =>
  createAction({
    body: JSON.stringify({
      name,
      description,
      public: isPublic
    }),
    endpoint: spotifyWebApiCreatePlaylistEndpoint.replace(
      '___USER_ID___',
      userId
    ),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    method: 'POST',
    types: [
      CREATE_PLAYLIST_REQUEST,
      {
        type: CREATE_PLAYLIST_RECEIVE,
        payload: (action, state, res) => res.json()
      },
      CREATE_PLAYLIST_FAILURE
    ],
    bailout: state => {
      /*
       * If we got not tastes data in store
       * or if we got some, but different in timeRange,
       * and we aren't already loading stuff,
       * don't bailout (DO THE REQUEST)
       */
      if (isEmpty(getPlaylistData(state)) && !playlistLoading(state)) {
        return false;
      }

      /*
       * otherwise, return data
       * from the store
       */
      return true;
    }
  });

export const addTrackToPlaylist = (token, playlistId, tracks) =>
  createAction({
    body: JSON.stringify({
      uris: tracks
    }),
    endpoint: spotifyWebApiAddTrackToPlaylistEndpoint.replace(
      '___PLAYLIST_ID___',
      playlistId
    ),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    method: 'POST',
    types: [
      ADD_TRACK_TO_PLAYLIST_REQUEST,
      {
        type: ADD_TRACK_TO_PLAYLIST_RECEIVE,
        payload: (action, state, res) => res.json()
      },
      ADD_TRACK_TO_PLAYLIST_FAILURE
    ]
  });

export const getPlaylistImages = (token, playlistId) =>
  createAction({
    endpoint: spotifyWebApiGetPlaylistImagesEndpoint.replace(
      '___PLAYLIST_ID___',
      playlistId
    ),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    method: 'GET',
    types: [
      GET_PLAYLIST_IMAGES_REQUEST,
      {
        type: GET_PLAYLIST_IMAGES_RECEIVE,
        payload: (action, state, res) => res.json()
      },
      GET_PLAYLIST_IMAGES_FAILURE
    ]
  });
