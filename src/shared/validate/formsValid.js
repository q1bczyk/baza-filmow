export const isEmail = (email) => {
    return email.includes('@') && (email.includes('.pl') || email.includes('.com'));
}

export const loginValid = (login) => {
    if(login.length >= 5)
        return true
    return false;
}

export const passwordValid = (password) => {
    if(password.length >= 8)
        return true
    return false;
}

export const signUpValid = (email, login, password) => {
    return isEmail(email) && loginValid(login) && passwordValid(password);
}

export const signInValid = (login, password) => {
    return loginValid(login) && passwordValid(password);
}