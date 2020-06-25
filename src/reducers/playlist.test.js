import reducer, { initialState } from './playlist';
import * as actions from 'actions/playlist';

describe('Playlist Reducer', () => {
  it('Should return default state', () => {
    const updatedState = reducer(undefined, {});

    expect(updatedState).toEqual(initialState);
  });

  it('Should handle SET_PLAYLIST_AVAILABILITY', () => {
    const isPublic = true;
    const updatedState = reducer(
      initialState,
      actions.setPlaylistAvailability(isPublic)
    );
    const expectedState = {
      ...initialState,
      isPublic
    };

    expect(updatedState).toEqual(expectedState);
  });

  it('Should handle CREATE_PLAYLIST_REQUEST', () => {
    const updatedState = reducer(initialState, {
      type: actions.CREATE_PLAYLIST_REQUEST
    });
    const expectedState = {
      ...initialState,
      loading: {
        ...initialState.loading,
        create: true
      }
    };

    expect(updatedState).toEqual(expectedState);
  });

  it('Should handle CREATE_PLAYLIST_RECEIVE', () => {
    const updatedState = reducer(initialState, {
      type: actions.CREATE_PLAYLIST_RECEIVE,
      payload: {}
    });
    const expectedState = {
      ...initialState,
      loading: {
        ...initialState.loading,
        create: false
      },
      data: {}
    };

    expect(updatedState).toEqual(expectedState);
  });

  it('Should handle CREATE_PLAYLIST_FAILURE', () => {
    const updatedState = reducer(initialState, {
      type: actions.CREATE_PLAYLIST_FAILURE,
      payload: {}
    });
    const expectedState = {
      ...initialState,
      loading: {
        ...initialState.loading,
        create: false
      },
      error: {
        ...initialState.error,
        create: {}
      }
    };

    expect(updatedState).toEqual(expectedState);
  });

  it('Should handle ADD_TRACK_TO_PLAYLIST_REQUEST', () => {
    const updatedState = reducer(initialState, {
      type: actions.ADD_TRACK_TO_PLAYLIST_REQUEST
    });
    const expectedState = {
      ...initialState,
      loading: {
        ...initialState.loading,
        addTrack: true
      }
    };

    expect(updatedState).toEqual(expectedState);
  });

  it('Should handle ADD_TRACK_TO_PLAYLIST_RECEIVE', () => {
    const updatedState = reducer(initialState, {
      type: actions.ADD_TRACK_TO_PLAYLIST_RECEIVE,
      payload: {}
    });
    const expectedState = {
      ...initialState,
      loading: {
        ...initialState.loading,
        addTrack: false
      },
      tracks: {}
    };

    expect(updatedState).toEqual(expectedState);
  });

  it('Should handle ADD_TRACK_TO_PLAYLIST_FAILURE', () => {
    const updatedState = reducer(initialState, {
      type: actions.ADD_TRACK_TO_PLAYLIST_FAILURE,
      payload: {}
    });
    const expectedState = {
      ...initialState,
      loading: {
        ...initialState.loading,
        addTrack: false
      },
      error: {
        ...initialState.error,
        addTrack: {}
      }
    };

    expect(updatedState).toEqual(expectedState);
  });

  it('Should handle GET_PLAYLIST_IMAGES_REQUEST', () => {
    const updatedState = reducer(initialState, {
      type: actions.GET_PLAYLIST_IMAGES_REQUEST
    });
    const expectedState = {
      ...initialState,
      loading: {
        ...initialState.loading,
        getImages: true
      }
    };

    expect(updatedState).toEqual(expectedState);
  });

  it('Should handle GET_PLAYLIST_IMAGES_RECEIVE', () => {
    const updatedState = reducer(initialState, {
      type: actions.GET_PLAYLIST_IMAGES_RECEIVE,
      payload: []
    });
    const expectedState = {
      ...initialState,
      loading: {
        ...initialState.loading,
        getImages: false
      },
      images: []
    };

    expect(updatedState).toEqual(expectedState);
  });

  it('Should handle GET_PLAYLIST_IMAGES_FAILURE', () => {
    const updatedState = reducer(initialState, {
      type: actions.GET_PLAYLIST_IMAGES_FAILURE,
      payload: {}
    });
    const expectedState = {
      ...initialState,
      loading: {
        ...initialState.loading,
        getImages: false
      },
      error: {
        ...initialState.error,
        getImages: {}
      }
    };

    expect(updatedState).toEqual(expectedState);
  });
});
