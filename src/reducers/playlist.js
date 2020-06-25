import * as actions from 'actions/playlist';

export const initialState = {
  data: {},
  tracks: {},
  images: [],
  isPublic: false,
  loading: {},
  error: {}
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.CREATE_PLAYLIST_REQUEST:
      return {
        ...state,
        loading: {
          ...state.loading,
          create: true
        }
      };

    case actions.CREATE_PLAYLIST_RECEIVE:
      return {
        ...state,
        loading: {
          ...state.loading,
          create: false
        },
        data: action.payload
      };

    case actions.CREATE_PLAYLIST_FAILURE:
      return {
        ...state,
        loading: {
          ...state.loading,
          create: false
        },
        error: {
          ...state.error,
          create: action.payload
        }
      };

    case actions.SET_PLAYLIST_AVAILABILITY:
      return {
        ...state,
        isPublic: action.payload
      };

    case actions.ADD_TRACK_TO_PLAYLIST_REQUEST:
      return {
        ...state,
        loading: {
          ...state.loading,
          addTrack: true
        }
      };

    case actions.ADD_TRACK_TO_PLAYLIST_RECEIVE:
      return {
        ...state,
        loading: {
          ...state.loading,
          addTrack: false
        },
        tracks: action.payload
      };

    case actions.ADD_TRACK_TO_PLAYLIST_FAILURE:
      return {
        ...state,
        loading: {
          ...state.loading,
          addTrack: false
        },
        error: {
          ...state.error,
          addTrack: action.payload
        }
      };

    case actions.GET_PLAYLIST_IMAGES_REQUEST:
      return {
        ...state,
        loading: {
          ...state.loading,
          getImages: true
        }
      };

    case actions.GET_PLAYLIST_IMAGES_RECEIVE:
      return {
        ...state,
        loading: {
          ...state.loading,
          getImages: false
        },
        images: action.payload
      };

    case actions.GET_PLAYLIST_IMAGES_FAILURE:
      return {
        ...state,
        loading: {
          ...state.loading,
          getImages: false
        },
        error: {
          ...state.error,
          getImages: action.payload
        }
      };

    default:
      return state;
  }
}
