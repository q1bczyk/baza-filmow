import styles from './NewsItem.module.scss';

const NewsItem = (props) => 
{
    return(
        <div 
            className={props.index > 2 ? styles.vertical : styles.horizontal}
            style=
            {{
                gridArea: 'i' + props.order,  
            }}
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