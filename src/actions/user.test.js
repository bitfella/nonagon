import configureMockStore from 'redux-mock-store';
import { apiMiddleware } from 'redux-api-middleware';
import thunk from 'redux-thunk';

import * as actions from 'actions/user';

const middlewares = [thunk, apiMiddleware];
const mockStore = configureMockStore(middlewares);

describe('Asynchronous User Actions', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('Should dispatch GET_USER_RECEIVE when getUser is called', () => {
    fetch.mockResponseOnce(JSON.stringify({ data: {} }));

    const expectedActions = [
      { type: actions.GET_USER_REQUEST },
      { type: actions.GET_USER_RECEIVE, payload: { data: {} } }
    ];

    const store = mockStore({ user: {} });

    return store.dispatch(actions.getUser()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
