import { useEffect, useRef, useState } from 'react';
import FilmItem from './film-item/FilmItem';
import styles from './FilmSection.module.scss';
import useWindowResize from '../../../../hooks/useWindowResize';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useLoaderData } from 'react-router-dom';

const FilmSection = () => 
{
    const carouselRef = useRef(null);
    const [spaceBetween, setSpace] = useState(0);
    const [currentPage, setPage] = useState(0);
    
    const loadedData = useLoaderData();
    const data = loadedData.movies;

    useEffect(() => {
        carouselRef.current.style.width = setWidth() + 'px'
    }, [useWindowResize()])

    const setWidth = () => 
    {
        if(window.innerWidth < 992)
            return 2500;
        const containerWidth = (window.innerWidth * 80) / 100;
        let space;
        let width;
        if(window.innerWidth > 1900)
            space = (containerWidth - 1000) / 4
        else if(window.innerWidth >= 1300 && window.innerWidth <= 1900 )
            space = (containerWidth - 1000) / 3
        else if(window.innerWidth >= 992 && window.innerWidth < 1300)
            space = (containerWidth - 750) / 2
        if(window.innerWidth <= 1900)
            width = 2000 + (7 * space);
        else 
            width = 1600 + (7 * space);
        setSpace(space);
        return width
    }

    const changePage = (value) => 
    {
        let widthToChange;
        if((currentPage === -3 && value < 0) && (window.innerWidth > 1900))
            return
        if((currentPage === -4 && value < 0) && (window.innerWidth > 1300 && window.innerWidth <= 1900))
            return
        if(currentPage === -5 && value < 0)
            return
        if(currentPage === 0 && value > 0)
            return
        const newPage = currentPage + value;
        if(window.innerWidth <=1900)
            widthToChange = newPage * (250 + spaceBetween);
        else 
        widthToChange = newPage * (200 + spaceBetween);
        carouselRef.current.style.transform = `translateX(${widthToChange}px)`;
        setPage(newPage)
    }

    return(
        <div className={styles.container}>
            <h2>Ostatnio dodane filmy</h2>
            <div 
                className={[styles.arrow, styles.arrowLeft].join(' ')}
                onClick={() => changePage(1)}  
                ><IoIosArrowBack/></div>
            <div 
                className={[styles.arrow, styles.arrowRight].join(' ')}
                onClick={() => changePage(-1)}
                ><IoIosArrowForward/></div>
            <div className={styles.grid}>
                <div className={styles.carousel} ref={carouselRef}>
                    {data.slice(-8).reverse().map((element) => (
                        <FilmItem
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