import reducer, { initialState } from './user';
import * as actions from 'actions/user';

describe('User Reducer', () => {
  it('Should return default state', () => {
    const updatedState = reducer(undefined, {});

    expect(updatedState).toEqual(initialState);
  });

  it('Should handle GET_USER_REQUEST', () => {
    const updatedState = reducer(initialState, {
      type: actions.GET_USER_REQUEST
    });
    const expectedState = {
      ...initialState,
      loading: true,
      error: null
    };

    expect(updatedState).toEqual(expectedState);
  });

  it('Should handle GET_USER_RECEIVE', () => {
    const updatedState = reducer(initialState, {
      type: actions.GET_USER_RECEIVE,
      payload: {}
    });
    const expectedState = {
      ...initialState,
      loading: false,
      data: {}
    };

    expect(updatedState).toEqual(expectedState);
  });

  it('Should handle GET_USER_FAILURE', () => {
    const updatedState = reducer(initialState, {
      type: actions.GET_USER_FAILURE,
      payload: {}
    });
    const expectedState = {
      ...initialState,
      loading: false,
      error: {},
      data: {}
    };

    expect(updatedState).toEqual(expectedState);
  });
});
