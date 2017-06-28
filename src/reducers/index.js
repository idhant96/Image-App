import { combineReducers } from 'redux';
import UserReducer from './reducer-client';
import ActiveReducer from './active-user-reducer';
import Images from './reducer-players';
import ActiveImage from './active-image';

const allreducers = combineReducers({
  users:UserReducer,
  activeUser: ActiveReducer,
  images: Images,
  activeImage: ActiveImage
});

export default allreducers;
