import { createStore, combineReducers } from 'redux';
import navbarReducer from '../reducers/navbarReducer';
import alertReducer from '../reducers/alertReducer';

const rootReducer = combineReducers({
    navbar: navbarReducer,
    alert : alertReducer,
  });
  
const rootStore = createStore(rootReducer);
  
export default rootStore;
