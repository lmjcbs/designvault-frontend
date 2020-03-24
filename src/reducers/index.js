import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { userReducer } from './userReducer';
import { postReducer } from './postReducer';

export const rootReducer = combineReducers({
  authReducer,
  userReducer,
  postReducer
});
