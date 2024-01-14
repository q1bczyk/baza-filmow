import { createStore } from 'redux';
import rootReducer from '../reducers/rootReducer';

const rootStore = createStore(rootReducer);

export default rootStore;