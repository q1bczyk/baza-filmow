import Icons from './icons/Icons';
import Links from './links/Links';
import MobileNav from './mobile-nav/MobileNav';
import styles from './Navbar.module.scss';
import useWindowResize from '../../hooks/useWindowResize';
import Logo from './logo/Logo';
import Search from '../../shared/ui/search/Search';
import { useSelector } from 'react-redux';

const Navbar = () => 
{
    const isSearchOpen = useSelector(state => state.search.isOpen)

    return(
        <div className={styles.container}>
            {isSearchOpen ? <Search/> : null}
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