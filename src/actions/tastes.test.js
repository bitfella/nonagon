import configureMockStore from 'redux-mock-store';
import { apiMiddleware } from 'redux-api-middleware';
import thunk from 'redux-thunk';

import * as actions from 'actions/tastes';
import { spotifyWebApiTimeRanges } from 'config/spotify';

const middlewares = [thunk, apiMiddleware];
const mockStore = configureMockStore(middlewares);

describe('Asynchronous Tastes Actions', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('Should dispatch GET_TOP_TRACKS_RECEIVE when getTopTracks is called', () => {
    fetch.mockResponseOnce(JSON.stringify({ data: {} }));

    const expectedActions = [
      { type: actions.GET_TOP_TRACKS_REQUEST },
      {
        type: actions.GET_TOP_TRACKS_RECEIVE,
        meta: { timeRange: spotifyWebApiTimeRanges[1] },
        payload: { data: {} }
      }
    ];

    const store = mockStore({ tastes: {} });

    return store.dispatch(actions.getTopTracks()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
