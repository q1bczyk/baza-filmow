const initialState = 
{
    title : '',
    instructions : '',
    isAlertOpen : false,
}

const alertReducer = (state = initialState, action) => {
    switch(action.type)
    {
        case 'SHOW_ALERT':
            return{
                ...state,
                title : action.payload.title,
                instructions : action.payload.instructions,
                isAlertOpen : true,
            }
        
        case 'HIDE_ALERT':
            return{
                ...state,
                isAlertOpen : false,
            }
        
        default:
            return state;    
    }
}

export default alertReducer;