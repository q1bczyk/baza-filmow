import styles from './FilmPage.module.scss';
import FilmItem from '../home/components/film-section/film-item/FilmItem';
import { useLoaderData } from 'react-router-dom';
import { useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';

const FilmPage = () => {

    const loadedData = useLoaderData();
    const data = loadedData.movies;

    useEffect(() => {
        scroll.scrollToTop({
            duration: 200,
            smooth: true,
        });
    })

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