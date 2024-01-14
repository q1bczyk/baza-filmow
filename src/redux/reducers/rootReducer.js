import { combineReducers } from 'redux';
import alertReducer from './alertReducer';
import navbarReducer from './navbarReducer';

const rootReducer = combineReducers({
  alert: alertReducer,
  navbar: navbarReducer,
});

export default rootReducer;