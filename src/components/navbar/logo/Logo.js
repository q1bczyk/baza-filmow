import { NavLink } from 'react-router-dom';
import styles from './Logo.module.scss';

const Logo = () => 
{
    return(
        <div className={styles.logo}>
            <NavLink to="/">
                Filmo<span>teka</span>
            </NavLink>
        </div>
    )
}

export default Logo;