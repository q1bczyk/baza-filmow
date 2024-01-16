import { useDispatch } from "react-redux";
import FilmSection from "./components/film-section/FilmSection";
import NewsSection from "./components/news-section/NewsSection";
import { useEffect } from "react";
import { isExpired } from 'react-jwt';
import CinemaSection from "../../shared/ui/cinema-section/CinemaSection";

const HomePage = () => 
{
    const dispatch = useDispatch();

    useEffect(() => {
        if(!isExpired(localStorage.getItem('token')))
             dispatch({type : 'LOGIN'})
    }, []);

    return(
        <div className="container">
            <NewsSection/>
            <FilmSection/>
            <CinemaSection/>
        </div>
    )
}

export default HomePage;