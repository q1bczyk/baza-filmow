import { createStore, combineReducers } from 'redux';
import navbarReducer from '../reducers/navbarReducer';
import alertReducer from '../reducers/alertReducer';
import searchReducer from '../reducers/searchReducer';

const rootReducer = combineReducers({
    navbar : navbarReducer,
    alert : alertReducer,
    search : searchReducer,
  });
  
const rootStore = createStore(rootReducer);
  
export default rootStore;
