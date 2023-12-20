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

export const signUpValid = (email, login, accountName, password, passwordRpt) => {
    return isEmail(email) && loginValid(login) && loginValid(accountName) && passwordValid(password) && passwordValid(passwordRpt);
}

export const signInValid = (login, password) => {
    return loginValid(login) && passwordValid(password);
}