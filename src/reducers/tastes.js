import * as actions from 'actions/tastes';

export const initialState = {
  tracks: {},
  timeRange: null,
  loading: false,
  error: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_TOP_TRACKS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };

    case actions.GET_TOP_TRACKS_RECEIVE:
      return {
        ...state,
        timeRange: action.meta.timeRange,
        loading: false,
        tracks: action.payload
      };

    case actions.GET_TOP_TRACKS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        tracks: {}
      };

    default:
      return state;
  }
}
