import Icons from './icons/Icons';
import Links from './links/Links';
import MobileNav from './mobile-nav/MobileNav';
import styles from './Navbar.module.scss';
import useWindowResize from '../../hooks/useWindowResize';
import Logo from './logo/Logo';

const Navbar = () => 
{
    return(
        <div className={styles.container}>
            <div className={styles.navbar}>
                <Logo/>
                {useWindowResize() < 992 ? null : <Links/>}
                <Icons/>
            </div>
            <MobileNav/>
        </div>
    )
}

export default Navbar;