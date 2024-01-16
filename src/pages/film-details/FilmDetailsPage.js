import { useLoaderData } from 'react-router-dom';
import styles from './FilmDetailsPage.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { deleteMovie } from '../../api/MoviesApi';
import CinemaSection from '../../shared/ui/cinema-section/CinemaSection';
import { animateScroll as scroll } from 'react-scroll';
import { useEffect } from 'react';

const FilmDetailsPage = () => {

    const dispatch = useDispatch();
    const loadedData = useLoaderData();
    
    const data = loadedData.movie;
    const isLoggedIn = useSelector(state => state.navbar.isLoggedIn);
    
    useEffect(() => {
        scroll.scrollToTop({
            duration: 200,
            smooth: true,
        });
    })

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
        <>
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
                {isLoggedIn ? <button onClick={() => deleteMovieHandle(data.id)}>Usuń</button> : null}
            </div>
        </div>
        <CinemaSection/>
        </>
    )
}

export default FilmDetailsPage;