import { createStore } from "redux";

const navbarReducer = (state = {isMenuActive : false}, action) => 
{
    if(action.type === "TOGGLE_MENU")
        return{
            isMenuActive: !state.isMenuActive
        }
        
    return state;
}

const store = createStore(navbarReducer)
export default store;