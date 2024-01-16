import { useDispatch } from "react-redux";
import FilmSection from "./components/film-section/FilmSection";
import NewsSection from "./components/news-section/NewsSection";
import { useEffect } from "react";
import { isExpired } from 'react-jwt';
import CinemaSection from "../../shared/ui/cinema-section/CinemaSection";
import { animateScroll as scroll } from 'react-scroll';

const HomePage = () => 
{
    const dispatch = useDispatch();

    useEffect(() => {
        if(!isExpired(localStorage.getItem('token')))
             dispatch({type : 'LOGIN'})
        scroll.scrollToTop({
            duration: 300,
            smooth: true,
        });
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