import reducer, { initialState } from './auth';
import * as actions from 'actions/auth';

describe('Auth Reducer', () => {
  it('Should return default state', () => {
    const updatedState = reducer(undefined, {});

    expect(updatedState).toEqual(initialState);
  });

  it('Should handle SET_ACCESS_TOKEN', () => {
    const accessToken = 'ACCESS_TOKEN';
    const updatedState = reducer(
      initialState,
      actions.setAccessToken(accessToken)
    );
    const expectedState = {
      ...initialState,
      accessToken
    };

    expect(updatedState).toEqual(expectedState);
  });
});
