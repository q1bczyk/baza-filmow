import styles from './Icons.module.scss';
import { CgLogIn } from "react-icons/cg";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoSearchOutline } from "react-icons/io5";

const Icons = () => 
{
    return(
        <div className={styles.container}>
            <p><IoSearchOutline /></p>
            <p><CgLogIn/></p>
            <p className={styles.hamburger}><RxHamburgerMenu/></p>
        </div>
    )
}

export default Icons;