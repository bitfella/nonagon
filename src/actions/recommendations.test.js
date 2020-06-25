import configureMockStore from 'redux-mock-store';
import { apiMiddleware } from 'redux-api-middleware';
import thunk from 'redux-thunk';

import * as actions from 'actions/recommendations';

const middlewares = [thunk, apiMiddleware];
const mockStore = configureMockStore(middlewares);

describe('Synchronous Recommendations Actions', () => {
  it('Should create an action to set recommendations danceability', () => {
    const range = [0.1, 0.9];
    const expectedAction = {
      type: actions.SET_RECOMMENDATIONS_DANCEABILITY,
      payload: range
    };

    expect(actions.setRecommendationsDanceability(range)).toEqual(
      expectedAction
    );
  });

  it('Should create an action to set recommendations energy', () => {
    const range = [0.1, 0.9];
    const expectedAction = {
      type: actions.SET_RECOMMENDATIONS_ENERGY,
      payload: range
    };

    expect(actions.setRecommendationsEnergy(range)).toEqual(expectedAction);
  });

  it('Should create an action to set recommendations valence', () => {
    const range = [0.1, 0.9];
    const expectedAction = {
      type: actions.SET_RECOMMENDATIONS_VALENCE,
      payload: range
    };

    expect(actions.setRecommendationsValence(range)).toEqual(expectedAction);
  });
});

describe('Asynchronous Recommendations Actions', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('Should dispatch GET_RECOMMENDATIONS_RECEIVE when getRecommendations is called', () => {
    fetch.mockResponseOnce(JSON.stringify({ data: [] }));

    const expectedActions = [
      { type: actions.GET_RECOMMENDATIONS_REQUEST },
      { type: actions.GET_RECOMMENDATIONS_RECEIVE, payload: { data: [] } }
    ];

    const store = mockStore({ recommendations: {} });

    return store.dispatch(actions.getRecommendations()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
