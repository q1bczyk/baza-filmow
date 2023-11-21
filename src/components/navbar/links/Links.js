import styles from './Links.module.scss';

const Links = () => 
{
    return(
        <ul className={styles.links}>
            <li><a>Filmy</a></li>
            <li><a>Seriale</a></li>
            <li><a>Ranking</a></li>
            <li><a>Newsy</a></li>
        </ul>
    )
}

export default Links;