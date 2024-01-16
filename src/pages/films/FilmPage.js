import styles from './FilmPage.module.scss';
import { useState, useEffect } from 'react';
import { getMovies } from '../../api/MoviesApi';
import FilmItem from '../home/components/film-section/film-item/FilmItem';

const FilmPage = () => {

    const [data, setData] = useState([]);

    const fetchLatestMovies = async () => {
        try{
            const data = await getMovies();
            console.log(data);
            setData(data);
        } catch(err){
            console.log(err)
        }
    }

    useEffect(() => {
        fetchLatestMovies();
    }, [])

    return(
        <div className={styles.wrapper}>
            <div className={styles.box}>
            {data.map((element) => (
                <div>
                    <FilmItem style={{margin : '5px'}}
                    key={element.id}
                    id={element.id}
                    img={element.image}
                    title={element.title}
                    canDelete={true}/>
                </div>
                ))} 
            </div>
        </div>
    )

}

export default FilmPage;