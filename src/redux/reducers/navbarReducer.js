const navbarReducer = (state, action) => {
    switch(action.type){
        
        case "TOGGLE_MENU":
            return{
                ...state,
                isMenuOpened : !state.isMenuOpened,
            };

        case "LOGIN":
            return{
                ...state,
                isLoggIn : true
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