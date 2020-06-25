import * as actions from 'actions/recommendations';
import { spotifyWebApiInitialRefinementValue } from 'config/spotify';

export const initialState = {
  data: [],
  refinements: {
    danceability: [...spotifyWebApiInitialRefinementValue],
    energy: [...spotifyWebApiInitialRefinementValue],
    valence: [...spotifyWebApiInitialRefinementValue]
  },
  loading: false,
  error: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.SET_RECOMMENDATIONS_DANCEABILITY:
      return {
        ...state,
        refinements: {
          ...state.refinements,
          danceability: action.payload
        }
      };

    case actions.SET_RECOMMENDATIONS_ENERGY:
      return {
        ...state,
        refinements: {
          ...state.refinements,
          energy: action.payload
        }
      };

    case actions.SET_RECOMMENDATIONS_VALENCE:
      return {
        ...state,
        refinements: {
          ...state.refinements,
          valence: action.payload
        }
      };

    case actions.GET_RECOMMENDATIONS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };

    case actions.GET_RECOMMENDATIONS_RECEIVE:
      return {
        ...state,
        loading: false,
        data: action.payload.tracks
      };

    case actions.GET_RECOMMENDATIONS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        data: []
      };

    default:
      return state;
  }
}
