import styles from './FilmItem.module.scss';
import { useHistory } from 'react-router-dom';

const FilmItem = (props) => 
{
    return(
        <div className={styles.container} onClick={() => {}}>
            <h3>{props.title}</h3>
            <img src={props.img}></img>
            <div></div>
        </div>
    )
}

export default FilmItem;