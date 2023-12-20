import { Navigate, useNavigate } from 'react-router-dom';
import styles from './FilmItem.module.scss';

const FilmItem = (props) => 
{
    const navigate = useNavigate();

    return(
        <div className={styles.container} onClick={() => navigate('/details?id=' + props.id)}>
            <h3>{props.title}</h3>
            <img src={props.img}></img>
            <div></div>
        </div>
    )
}

export default FilmItem;