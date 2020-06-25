import { createAction } from 'redux-api-middleware';
import { isEmpty } from 'lodash-es';
import {
  getTastesTracks,
  getTastesTimeRange,
  tastesLoading
} from 'selectors/tastes';
import {
  spotifyWebApiUserTopTracksEndpoint,
  spotifyWebApiTimeRanges
} from 'config/spotify';

export const GET_TOP_TRACKS_REQUEST = 'app/tastes/top-tracks/GET_REQUEST';
export const GET_TOP_TRACKS_RECEIVE = 'app/tastes/top-tracks/GET_RECEIVE';
export const GET_TOP_TRACKS_FAILURE = 'app/tastes/top-tracks/GET_FAILURE';

export const getTopTracks = (token, timeRange = spotifyWebApiTimeRanges[1]) =>
  createAction({
    endpoint: `${spotifyWebApiUserTopTracksEndpoint}?time_range=${timeRange}`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    method: 'GET',
    types: [
      GET_TOP_TRACKS_REQUEST,
      {
        type: GET_TOP_TRACKS_RECEIVE,
        payload: (action, state, res) => res.json(),
        meta: {
          timeRange
        }
      },
      GET_TOP_TRACKS_FAILURE
    ],
    bailout: state => {
      /*
       * If we got not tastes data in store
       * or if we got some, but different in timeRAnge
       * and we aren't already loading stuff,
       * don't bailout (DO THE REQUEST)
       */
      if (
        (isEmpty(getTastesTracks(state)) ||
          timeRange !== getTastesTimeRange(state)) &&
        !tastesLoading(state)
      ) {
        return false;
      }

      /*
       * otherwise, return data
       * from the store
       */
      return true;
    }
  });
