import { createAction } from 'redux-api-middleware';
import { spotifyWebApiGetRecommendationsEndpoint } from 'config/spotify';

export const SET_RECOMMENDATIONS_DANCEABILITY =
  'app/recommendations/SET_DANCEABILITY';
export const SET_RECOMMENDATIONS_ENERGY = 'app/recommendations/SET_ENERGY';
export const SET_RECOMMENDATIONS_VALENCE = 'app/recommendations/SET_VALENCE';
export const GET_RECOMMENDATIONS_REQUEST = 'app/recommendations/GET_REQUEST';
export const GET_RECOMMENDATIONS_RECEIVE = 'app/recommendations/GET_RECEIVE';
export const GET_RECOMMENDATIONS_FAILURE = 'app/recommendations/GET_FAILURE';

export const setRecommendationsDanceability = value => ({
  type: SET_RECOMMENDATIONS_DANCEABILITY,
  payload: value
});

export const setRecommendationsEnergy = value => ({
  type: SET_RECOMMENDATIONS_ENERGY,
  payload: value
});

export const setRecommendationsValence = value => ({
  type: SET_RECOMMENDATIONS_VALENCE,
  payload: value
});

export const getRecommendations = (token, seedTracks, refinements) =>
  createAction({
    endpoint: `${spotifyWebApiGetRecommendationsEndpoint}?limit=100&seed_tracks=${seedTracks}&${refinements}`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    method: 'GET',
    types: [
      GET_RECOMMENDATIONS_REQUEST,
      {
        type: GET_RECOMMENDATIONS_RECEIVE,
        payload: (action, state, res) => res.json()
      },
      GET_RECOMMENDATIONS_FAILURE
    ]
  });
