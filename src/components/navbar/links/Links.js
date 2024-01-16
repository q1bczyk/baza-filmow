import styles from './Links.module.scss';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux/es/hooks/useSelector';

const Links = (props) => 
{
    const isUserActive = useSelector(state => state.navbar.isLoggedIn)

    return(
        <ul className={styles.links}
            style={{flexDirection: props.option === 1 ? 'column' : 'row'}}
        >
            <li>
                <NavLink to='' className={styles.links}>
                    Strona Główna
                </NavLink>
            </li>
            <li>
                <NavLink to='movies' className={styles.links}>
                    Filmy
                </NavLink>
            </li>
            <li><a>Ranking</a></li>
            <li><a>Newsy</a></li>
            {isUserActive === true ? 
            <li>
                <NavLink 
                    to='add' 
                    className={styles.links}
                    
                >
                    Dodaj Film
                </NavLink>
            </li> 
            : null}
        </ul>
    )
}

export default Links;