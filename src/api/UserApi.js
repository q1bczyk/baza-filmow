import axios from 'axios';

const baseUrl = 'https://at.usermd.net/api/user'

export const createAccount = async (data) => {
    try{
        const response = await axios.post(`${baseUrl}/create`, data)
        return response.data;
    } catch (error){
        throw error;
    }
}