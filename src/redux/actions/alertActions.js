export const showAlert = (data) => {
    return{
        type : 'SHOW_ALERT',
        payload : data,
    }
};

export const hideAlert = () => {
    return{
        type : 'HIDE_ALERT'
    }
}