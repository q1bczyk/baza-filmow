import styles from './Icons.module.scss';
import { CgLogIn, CgLogOut } from "react-icons/cg";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoSearchOutline } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Icons = () => 
{
    const isUserActive = useSelector(state => state.isLoggedIn)
    const dispatch = useDispatch();

    const handleHamburgerClick = () => {
        dispatch({type : 'TOGGLE_MENU'});
    };

    const handleLogOutClick = () => {
        dispatch({type : 'LOGOUT'});
    };
    
    return(
        <div className={styles.container}>
            <p><IoSearchOutline/></p>
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