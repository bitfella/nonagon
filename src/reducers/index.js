import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import authReducer from './auth';
import userReducer from './user';
import tastesReducer from './tastes';
import recommendationsReducer from './recommendations';
import playlistReducer from './playlist';

const rootReducer = history =>
  combineReducers({
    auth: authReducer,
    user: userReducer,
    tastes: tastesReducer,
    recommendations: recommendationsReducer,
    playlist: playlistReducer,
    router: connectRouter(history)
  });

export default rootReducer;
