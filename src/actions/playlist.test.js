import configureMockStore from 'redux-mock-store';
import { apiMiddleware } from 'redux-api-middleware';
import thunk from 'redux-thunk';

import * as actions from 'actions/playlist';

const middlewares = [thunk, apiMiddleware];
const mockStore = configureMockStore(middlewares);

describe('Synchronous Playlist Actions', () => {
  it('Should create an action to set playlist availability', () => {
    const expectedAction = {
      type: actions.SET_PLAYLIST_AVAILABILITY,
      payload: true
    };

    expect(actions.setPlaylistAvailability(true)).toEqual(expectedAction);
  });
});

describe('Asynchronous Playlist Actions', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('Should dispatch CREATE_PLAYLIST_RECEIVE when createPlaylist is called', () => {
    fetch.mockResponseOnce(JSON.stringify({ data: {} }));

    const expectedActions = [
      { type: actions.CREATE_PLAYLIST_REQUEST },
      { type: actions.CREATE_PLAYLIST_RECEIVE, payload: { data: {} } }
    ];

    const store = mockStore({ playlist: { data: {}, loading: {} } });

    return store.dispatch(actions.createPlaylist()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('Should dispatch ADD_TRACK_TO_PLAYLIST_RECEIVE when addTrackToPlaylist is called', () => {
    fetch.mockResponseOnce(JSON.stringify({ data: {} }));

    const expectedActions = [
      { type: actions.ADD_TRACK_TO_PLAYLIST_REQUEST },
      { type: actions.ADD_TRACK_TO_PLAYLIST_RECEIVE, payload: { data: {} } }
    ];

    const store = mockStore({ playlist: {} });

    return store.dispatch(actions.addTrackToPlaylist()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('Should dispatch GET_PLAYLIST_IMAGES_RECEIVE when getPlaylistImages is called', () => {
    fetch.mockResponseOnce(JSON.stringify({ data: [] }));

    const expectedActions = [
      { type: actions.GET_PLAYLIST_IMAGES_REQUEST },
      { type: actions.GET_PLAYLIST_IMAGES_RECEIVE, payload: { data: [] } }
    ];

    const store = mockStore({ playlist: {} });

    return store.dispatch(actions.getPlaylistImages()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
