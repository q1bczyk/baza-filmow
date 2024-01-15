import Links from '../links/Links';
import styles from './MobileNav.module.scss';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { ImCross } from "react-icons/im";
import { useDispatch } from 'react-redux';

const MobileNav = (props) => 
{
    const isMenuActive = useSelector(state => state.navbar.isMenuOpened)
    const dispatch = useDispatch();

    const handleHamburgerClick = () => {
        dispatch({type : 'TOGGLE_MENU'});
    };

    return(
        <div className={styles.container}
            style={{transform: isMenuActive === false ? 'translateX(100%)' : 'translateX(0)'}}
        >
            <div className={styles.logo}>Filmo<span>teka</span></div>
            <p onClick={handleHamburgerClick}><ImCross /></p>
            <Links
                option={1}
            />
        </div>
    )
}

export default MobileNav;