import styles from './Icons.module.scss';
import { CgLogIn } from "react-icons/cg";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoSearchOutline } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Icons = () => 
{
    const dispatch = useDispatch();

    const handleHamburgerClick = () => {
        dispatch({type : 'TOGGLE_MENU'});
    };
    
    return(
        <div className={styles.container}>
            <p><IoSearchOutline/></p>
            <p>
                <NavLink to='signin'><CgLogIn/></NavLink>
            </p>
            <p className={styles.hamburger} onClick={handleHamburgerClick}><RxHamburgerMenu/></p>
        </div>
    )
}

export default Icons;