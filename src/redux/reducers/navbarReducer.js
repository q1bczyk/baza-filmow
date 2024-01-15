const initialState = 
{
    isLoggedIn  : false,
    isMenuOpened : false,
}

const navbarReducer = (state = initialState, action) => {
    switch(action.type){
        
        case "TOGGLE_MENU":
            return{
                ...state,
                isMenuOpened : !state.isMenuOpened,
            };

        case "LOGIN":
            return{
                ...state,
                isLoggedIn : true
            };
            
        case "LOGOUT":
            return{
                ...state,
                isLoggedIn : false
            }
        
        default:
            return state;
    }
}

export default navbarReducer;