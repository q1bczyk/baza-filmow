import styles from './Links.module.scss';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux/es/hooks/useSelector';

const Links = (props) => 
{
    const isUserActive = useSelector(state => state.isLoggedIn)

    return(
        <ul className={styles.links}
            style={{flexDirection: props.option === 1 ? 'column' : 'row'}}
        >
            <li>
                <NavLink to=''
                    style={({ isActive }) => ({
                        color: isActive ? '#ffbb00' : 'white',
                    })}
                >
                    Strona Główna
                </NavLink>
            </li>
            <li><a>Filmy</a></li>
            <li><a>Ranking</a></li>
            <li><a>Newsy</a></li>
            {isUserActive === true ? 
            <li>
                <NavLink to='add'
                    style={({ isActive }) => ({
                        color: isActive ? '#ffbb00' : 'white',
                    })}
                >
                    Dodaj Film
                </NavLink>
            </li> 
            : null}
        </ul>
    )
}

export default Links;