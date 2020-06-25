import reducer, { initialState } from './recommendations';
import * as actions from 'actions/recommendations';
import { spotifyWebApiInitialRefinementValue } from 'config/spotify';

describe('Recommendations Reducer', () => {
  it('Should return default state', () => {
    const updatedState = reducer(undefined, {});

    expect(updatedState).toEqual(initialState);
  });

  it('Should handle SET_RECOMMENDATIONS_DANCEABILITY', () => {
    const updatedState = reducer(initialState, {
      type: actions.SET_RECOMMENDATIONS_DANCEABILITY,
      payload: spotifyWebApiInitialRefinementValue
    });
    const expectedState = {
      ...initialState,
      refinements: {
        ...initialState.refinements,
        danceability: spotifyWebApiInitialRefinementValue
      }
    };

    expect(updatedState).toEqual(expectedState);
  });

  it('Should handle SET_RECOMMENDATIONS_ENERGY', () => {
    const updatedState = reducer(initialState, {
      type: actions.SET_RECOMMENDATIONS_ENERGY,
      payload: spotifyWebApiInitialRefinementValue
    });
    const expectedState = {
      ...initialState,
      refinements: {
        ...initialState.refinements,
        energy: spotifyWebApiInitialRefinementValue
      }
    };

    expect(updatedState).toEqual(expectedState);
  });

  it('Should handle SET_RECOMMENDATIONS_VALENCE', () => {
    const updatedState = reducer(initialState, {
      type: actions.SET_RECOMMENDATIONS_VALENCE,
      payload: spotifyWebApiInitialRefinementValue
    });
    const expectedState = {
      ...initialState,
      refinements: {
        ...initialState.refinements,
        valence: spotifyWebApiInitialRefinementValue
      }
    };

    expect(updatedState).toEqual(expectedState);
  });

  it('Should handle GET_RECOMMENDATIONS_REQUEST', () => {
    const updatedState = reducer(initialState, {
      type: actions.GET_RECOMMENDATIONS_REQUEST
    });
    const expectedState = {
      ...initialState,
      loading: true,
      error: null
    };

    expect(updatedState).toEqual(expectedState);
  });

  it('Should handle GET_RECOMMENDATIONS_RECEIVE', () => {
    const updatedState = reducer(initialState, {
      type: actions.GET_RECOMMENDATIONS_RECEIVE,
      payload: {
        tracks: []
      }
    });
    const expectedState = {
      ...initialState,
      loading: false,
      data: []
    };

    expect(updatedState).toEqual(expectedState);
  });

  it('Should handle GET_RECOMMENDATIONS_FAILURE', () => {
    const updatedState = reducer(initialState, {
      type: actions.GET_RECOMMENDATIONS_FAILURE,
      payload: {}
    });
    const expectedState = {
      ...initialState,
      loading: false,
      error: {},
      data: []
    };

    expect(updatedState).toEqual(expectedState);
  });
});
