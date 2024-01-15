import axios from 'axios';

const baseUrl = 'https://at.usermd.net/api/movies';
const headers = {
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('token'),
}

export const addMovie = async (data) => {
    try{
        const response = await axios.post(baseUrl, data, { headers : headers})
        return response.data;
    } catch (error){
        throw error;
    }
}

export const getMovies = async (data) => {
    try{
        const response = await axios.get(baseUrl)
        return response.data;
    } catch (error){
        throw error;
    }
}