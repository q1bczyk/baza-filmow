import Links from './links/Links';
import styles from './Navbar.module.scss';

const Navbar = () => 
{
    return(
        <div className={styles.container}>
            <div className={styles.navbar}>
                <div className={styles.logo}>Filmo<span>teka</span></div>
                <Links/>
            </div>
        </div>
    )
}

export default Navbar;