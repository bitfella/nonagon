import * as actions from 'actions/auth';

export const initialState = {
  accessToken: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.SET_ACCESS_TOKEN:
      return {
        ...state,
        accessToken: action.accessToken
      };

    default:
      return state;
  }
}
