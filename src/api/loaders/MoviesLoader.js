import { defer } from "react-router-dom";
import { getMovies, getMovie } from "../MoviesApi";

export const moviesLoader = async() => {
    let movies;
    try
    {
        movies = await getMovies();
    } catch(err){
        throw(err);
    }
    return defer({
        movies : movies
    })
}

export const movieLoader = async(meta) => {
    const movieId = meta.params.movieId;
    let movie;
    try
    {
        movie = await getMovie(movieId);
    } catch(err){
        throw(err);
    }
    return defer({
        movie : movie
    })
}