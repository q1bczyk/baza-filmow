import { useSearchParams } from 'react-router-dom';
import styles from './FilmDetailsPage.module.scss';
import { filmData } from '../../localdata/filmData';
import { useEffect, useState } from 'react';
import { getMovie } from '../../api/MoviesApi';

const FilmDetailsPage = () => {

    const [searchParams] = useSearchParams();
    const id = searchParams.get('id');
    const [data, setData] = useState({});
    
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
            </div>
        </div>
    )
}

export default FilmDetailsPage;