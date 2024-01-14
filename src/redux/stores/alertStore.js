import { createStore } from "redux";
import alertReducer from "../reducers/alertReducer";
import { initialState } from "../states/alertState";

const alertStore = createStore(alertReducer, initialState)

export default alertStore;