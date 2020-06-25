import * as actions from 'actions/auth';

describe('Synchronous Auth Actions', () => {
  it('Should create an action to set the access token', () => {
    const accessToken = 'ACCESS_TOKEN';
    const expectedAction = {
      type: actions.SET_ACCESS_TOKEN,
      accessToken
    };

    expect(actions.setAccessToken(accessToken)).toEqual(expectedAction);
  });
});
