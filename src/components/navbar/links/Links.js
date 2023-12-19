import styles from './Links.module.scss';


const Links = (props) => 
{
    return(
        <ul className={styles.links}
            style={{flexDirection: props.option === 1 ? 'column' : 'row'}}
        >
            <li><a>Filmy</a></li>
            <li><a>Seriale</a></li>
            <li><a>Ranking</a></li>
            <li><a>Newsy</a></li>
        </ul>
    )
}

export default Links;