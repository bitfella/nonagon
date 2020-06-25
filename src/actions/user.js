import { createAction } from 'redux-api-middleware';
import { isEmpty } from 'lodash-es';
import { getUserData, userLoading } from 'selectors/user';
import { spotifyWebApiProfileEndpoint } from 'config/spotify';

export const GET_USER_REQUEST = 'app/user/GET_REQUEST';
export const GET_USER_RECEIVE = 'app/user/GET_RECEIVE';
export const GET_USER_FAILURE = 'app/user/GET_FAILURE';

export const getUser = token =>
  createAction({
    endpoint: spotifyWebApiProfileEndpoint,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    method: 'GET',
    types: [
      GET_USER_REQUEST,
      {
        type: GET_USER_RECEIVE,
        payload: (action, state, res) => res.json()
      },
      GET_USER_FAILURE
    ],
    bailout: state => {
      /*
       * If we got not user data in store
       * and we aren't already loading stuff,
       * don't bailout (DO THE REQUEST)
       */
      if (isEmpty(getUserData(state)) && !userLoading(state)) {
        return false;
      }

      /*
       * otherwise, return data
       * from the store
       */
      return true;
    }
  });
