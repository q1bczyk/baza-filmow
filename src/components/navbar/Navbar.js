import Icons from './icons/Icons';
import Links from './links/Links';
import MobileNav from './mobile-nav/MobileNav';
import styles from './Navbar.module.scss';
import useWindowResize from '../../hooks/useWindowResize';
import navbarStore from '../../redux/stores/navbarStore';
import { Provider } from 'react-redux';
import Logo from './logo/Logo';

const Navbar = () => 
{
    return(
        <Provider store={navbarStore}>
            <div className={styles.container}>
                <div className={styles.navbar}>
                    <Logo/>
                    {useWindowResize() < 992 ? null : <Links/>}
                    <Icons/>
                </div>
                <MobileNav/>
            </div>
        </Provider>
    )
}

export default Navbar;