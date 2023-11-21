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
            <img src={props.img}></img>
            <p>{props.text}</p>
            <div className={styles.overly}></div>
        </div>
    )
}

export default NewsItem;