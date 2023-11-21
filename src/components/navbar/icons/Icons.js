import styles from './Icons.module.scss';
import { CgLogIn } from "react-icons/cg";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoSearchOutline } from "react-icons/io5";
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';

const Icons = () => 
{
    const dispatch = useDispatch();

    const handleHamburgerClick = () => {
        dispatch({type : 'TOGGLE_MENU'});
    };
    
    return(
        <div className={styles.container}>
            <p><IoSearchOutline /></p>
            <p><CgLogIn/></p>
            <p className={styles.hamburger} onClick={handleHamburgerClick}><RxHamburgerMenu/></p>
        </div>
    )
}

export default Icons;