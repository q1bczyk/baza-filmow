import FilmSection from "./components/film-section/FilmSection";
import NewsSection from "./components/news-section/NewsSection";

const HomePage = () => 
{
    return(
        <div className="container">
            <NewsSection/>
            <FilmSection/>
        </div>
    )
}

export default HomePage;