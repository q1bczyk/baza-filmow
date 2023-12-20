export const isEmail = (text) => {
    return text.includes('@') && (text.includes('.pl') || text.includes('.com'));
}
