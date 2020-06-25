import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { apiMiddleware } from 'redux-api-middleware';
import thunk from 'redux-thunk';
import createRootReducer from './reducers';

export const history = createBrowserHistory();
const middlewares = [thunk, apiMiddleware, routerMiddleware(history)];

export default function configureStore(preloadedState = {}) {
  const composeEnhancer =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    createRootReducer(history),
    preloadedState,
    composeEnhancer(applyMiddleware(...middlewares))
  );

  return store;
}
