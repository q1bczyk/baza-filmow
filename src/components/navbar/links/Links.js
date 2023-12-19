import styles from './Links.module.scss';
import { NavLink } from 'react-router-dom';

const Links = (props) => 
{
    
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
            <li><a>Seriale</a></li>
            <li><a>Ranking</a></li>
            <li><a>Newsy</a></li>
        </ul>
    )
}

export default Links;