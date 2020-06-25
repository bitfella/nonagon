import reducer, { initialState } from './tastes';
import * as actions from 'actions/tastes';

describe('Tastes Reducer', () => {
  it('Should return default state', () => {
    const updatedState = reducer(undefined, {});

    expect(updatedState).toEqual(initialState);
  });

  it('Should handle GET_TOP_TRACKS_REQUEST', () => {
    const updatedState = reducer(initialState, {
      type: actions.GET_TOP_TRACKS_REQUEST
    });
    const expectedState = {
      ...initialState,
      loading: true,
      error: null
    };

    expect(updatedState).toEqual(expectedState);
  });

  it('Should handle GET_TOP_TRACKS_RECEIVE', () => {
    const updatedState = reducer(initialState, {
      type: actions.GET_TOP_TRACKS_RECEIVE,
      meta: {
        timeRange: 'TIME_RANGE'
      },
      payload: {}
    });
    const expectedState = {
      ...initialState,
      timeRange: 'TIME_RANGE',
      loading: false,
      tracks: {}
    };

    expect(updatedState).toEqual(expectedState);
  });

  it('Should handle GET_TOP_TRACKS_FAILURE', () => {
    const updatedState = reducer(initialState, {
      type: actions.GET_TOP_TRACKS_FAILURE,
      payload: {}
    });
    const expectedState = {
      ...initialState,
      loading: false,
      error: {},
      tracks: {}
    };

    expect(updatedState).toEqual(expectedState);
  });
});
