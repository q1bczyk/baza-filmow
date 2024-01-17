import { useNavigate } from 'react-router-dom';
import styles from './NewsItem.module.scss';

const NewsItem = (props) => 
{
    const navigate = useNavigate();

    return(
        <div 
            className={props.index > 2 ? styles.vertical : styles.horizontal}
            style=
            {{
                gridArea: 'i' + props.order,  
            }}
            onClick={() => navigate(`/news/${props.id}`)}
        >
            <div className={styles.imageBox}>
                <img src={props.img}></img>
            </div>
            <p>{props.text}</p>
            <div className={styles.overly}></div>
        </div>
    )
}

export default NewsItem;