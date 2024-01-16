import { useEffect, useState } from 'react';
import { getMovies } from '../../../api/MoviesApi';
import Loader from '../loader/Loader';
import styles from './Search.module.scss';
import { IoMdClose } from "react-icons/io";
import { useDispatch } from 'react-redux';
import FilmItem from '../../../pages/home/components/film-section/film-item/FilmItem';

const Search = () => {

    const dispatch = useDispatch();

    const[isLoading, setLoading] = useState(true)
    const[title, setTitle] = useState('');
    const[movies, setMovies] = useState([]);
    const[filteredMovies, setFilteredMovies] = useState([]);

    const fetchMovies = async() => {
        try{
            const fetchedMovies = await getMovies();
            setMovies(fetchedMovies);
            setFilteredMovies(fetchedMovies);
            setLoading(false)
        }catch(err){
            console.log(err)
        }
    }

    useEffect(() => {
        fetchMovies();
        console.log(filteredMovies)
    }, [])

    const hideSearchHandle = () => {
        dispatch({type : 'HIDE_SEARCH'})
    } 

    const handleTitleChange = (event) => {
        const inputTitle = event.target.value;
        setTitle(inputTitle);

        const filtered = movies.filter((movie) =>
            movie.title.toLowerCase().includes(inputTitle.toLowerCase())
        );

        setFilteredMovies(filtered);
    };

    return(
        <div className={styles.wrapper}>
            {isLoading ? <Loader/> : null}
            <div className={styles.box}>
                <p onClick={hideSearchHandle}><IoMdClose/></p>
                <div className={styles.inputs}>
                    <input 
                        type="text"
                        value={title}
                        placeholder="podaj tytuł"
                        onChange={(event) => handleTitleChange(event)}>
                    </input>
                </div>
                <div className={styles.movies}>
                    {filteredMovies.length === 0 && !isLoading? <h3>Brak filmów</h3> :
                        filteredMovies.map((movie) => (
                            <div className={styles.movie} onClick={hideSearchHandle}>
                                <FilmItem
                                id={movie.id}
                                title={movie.title}
                                img={movie.image}
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Search;