import { combineReducers } from 'redux';
import UserReducer from './reducer-client';
import ActiveReducer from './active-user-reducer';

const allreducers = combineReducers({
  users:UserReducer,
  activeUser: ActiveReducer
});

export default allreducers;
