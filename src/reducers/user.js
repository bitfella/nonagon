import * as actions from 'actions/user';

export const initialState = {
  data: {},
  loading: false,
  error: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_USER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };

    case actions.GET_USER_RECEIVE:
      return {
        ...state,
        loading: false,
        data: action.payload
      };

    case actions.GET_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        data: {}
      };

    default:
      return state;
  }
}
