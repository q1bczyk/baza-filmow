import styles from './Icons.module.scss';
import { CgLogIn, CgLogOut } from "react-icons/cg";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoSearchOutline } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Icons = () => 
{
    const isUserActive = useSelector(state => state.navbar.isLoggedIn)
    const dispatch = useDispatch();

    const handleHamburgerClick = () => {
        dispatch({type : 'TOGGLE_MENU'});
    };

    const handleLogOutClick = () => {
        localStorage.removeItem('token');
        dispatch({type : 'LOGOUT'});
    };

    const handleSearchClick = () => {
        dispatch({type : 'SHOW_SEARCH'});
    }
    
    return(
        <div className={styles.container}>
            <p><IoSearchOutline onClick={handleSearchClick}/></p>
            <p>
                {isUserActive === false ? 
                    <NavLink to='signin'><CgLogIn/></NavLink> : 
                    <CgLogOut onClick={handleLogOutClick}/>}
            </p>
            <p className={styles.hamburger} onClick={handleHamburgerClick}><RxHamburgerMenu/></p>
        </div>
    )
}

export default Icons;