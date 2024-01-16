import { useNavigate } from 'react-router-dom';
import styles from './FilmItem.module.scss';
import { useState, useEffect } from 'react';
import Loader from '../../../../../shared/ui/loader/Loader';

const FilmItem = (props) => 
{
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const image = new Image();
        image.src = props.img;

        image.onload = () => {
        setLoading(false);
        };
    }, [props.img]);

    return(
        <div className={styles.container} onClick={() => navigate(`/details/${props.id}`)}>
            <h3>{props.title}</h3>
            <p>
                {loading ? <Loader/> : <img src={props.img}></img>}
            </p>
            <div></div>
        </div>
    )
}

export default FilmItem;