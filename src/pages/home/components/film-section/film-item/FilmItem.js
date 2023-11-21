import styles from './FilmItem.module.scss';

const FilmItem = (props) => 
{
    return(
        <div className={styles.container}>
            <h3>{props.title}</h3>
            <img src={props.img}></img>
            <div></div>
        </div>
    )
}

export default FilmItem;