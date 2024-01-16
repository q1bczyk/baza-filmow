import { useNavigate, useSearchParams } from 'react-router-dom';
import styles from './FilmDetailsPage.module.scss';
import { useEffect, useState } from 'react';
import { getMovie } from '../../api/MoviesApi';
import { useDispatch, useSelector } from 'react-redux';
import { deleteMovie } from '../../api/MoviesApi';

const FilmDetailsPage = () => {

    const [searchParams] = useSearchParams();
    const id = searchParams.get('id');
    const [data, setData] = useState({});
    const isLoggedIn = useSelector(state => state.navbar.isLoggedIn);
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        fetchMovie();
    }, [])

    const fetchMovie = async () => {
        try{
            const data = await getMovie(id);
            setData(data);
        }catch(err){
            console.log(err)
        }
    }
    
    const deleteMovieHandle = async(id) => {
        try{
            await deleteMovie(id);
            showAlert('Sukces!', 'pomyślnie usunięto film');
        } catch(err){
            console.log(err);
            showAlert('Błąd serwera!', 'spróbuj ponownie później');
        }
    }

    const showAlert = (title, instructions) => {
        dispatch({type: 'SHOW_ALERT', payload : {title : title, instructions : instructions}})
    }

    return(
        <div className={styles.container}>
            <div className={styles.img}>
                <img src={data.image}></img>
            </div>
            <div className={styles.descriptionBox}>
                <h4>Film</h4>
                <h2>{data.title}</h2>
                <div className={styles.description}>
                    {data.content}
                </div>
                <div className={styles.info}>
                    <p>reżyseria: <span>Adrian Apanel</span></p>
                    <p>gatunek: <span>{data.genre}</span></p>
                    <p>produkcja: <span>Polska</span></p>
                    <p>premiera: <span>{data.productionYear}</span></p>
                    <p>ocena: <span>{data.rate}</span></p>
                </div>
                {isLoggedIn ? <button onClick={() => deleteMovieHandle(id)}>Usuń</button> : null}
            </div>
        </div>
    )
}

export default FilmDetailsPage;