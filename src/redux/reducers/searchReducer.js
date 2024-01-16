const initialState = 
{
    isOpen : false
}

const searchReducer = (state = initialState, action) => {
    switch(action.type)
    {
        case 'SHOW_SEARCH':
            return{
                isOpen : true,
            }

        case 'HIDE_SEARCH':
            return{
                isOpen : false,
            }
        
        default:
            return state;
            
    }
}

export default searchReducer;