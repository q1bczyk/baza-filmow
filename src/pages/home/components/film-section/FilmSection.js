import { useEffect, useRef, useState } from 'react';
import FilmItem from './film-item/FilmItem';
import styles from './FilmSection.module.scss';
import useWindowResize from '../../../../hooks/useWindowResize';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useLoaderData } from 'react-router-dom';
import { setWidth, changePage } from './carousel-controllers/carouselController';

const FilmSection = () => 
{
    const carouselRef = useRef(null);
    const [spaceBetween, setSpace] = useState(0);
    const [currentPage, setPage] = useState(0);
    
    const loadedData = useLoaderData();
    const data = loadedData.movies;

    useEffect(() => {
        const settings = setWidth();
        carouselRef.current.style.width = settings.width + 'px';
        setSpace(settings.space);
    }, [useWindowResize()])

    const changePageHandler = (value) => 
    {
        const settings = changePage(value, currentPage, spaceBetween);
        if(settings)
        {
            carouselRef.current.style.transform = `translateX(${settings.widthToChange}px)`;
            setPage(settings.newPage)
        }
        else return;
    }

    return(
        <div className={styles.container}>
            <h2>Ostatnio dodane filmy</h2>
            <div 
                className={[styles.arrow, styles.arrowLeft].join(' ')}
                onClick={() => changePageHandler(1)}  
                ><IoIosArrowBack/></div>
            <div 
                className={[styles.arrow, styles.arrowRight].join(' ')}
                onClick={() => changePageHandler(-1)}
                ><IoIosArrowForward/></div>
            <div className={styles.grid}>
                <div className={styles.carousel} ref={carouselRef}>
                    {data.slice(-8).reverse().map((element) => (
                        <FilmItem
                        key={element.id}
                        id={element.id}
                        img={element.image}
                        title={element.title}
                    /> 
                    )    
                    )}
                </div>
            </div>
        </div>
    )
}

export default FilmSection;