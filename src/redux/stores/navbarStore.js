import { createStore } from "redux";
import navbarReducer from "../reducers/navbarReducer";
import { initialState } from "../states/navbarState";

const navbarStore = createStore(navbarReducer, initialState);

export default navbarStore;