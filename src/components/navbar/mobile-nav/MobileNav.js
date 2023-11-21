import Links from '../links/Links';
import styles from './MobileNav.module.scss';
import { ImCross } from "react-icons/im";

const MobileNav = (props) => 
{
    return(
        <div className={styles.container}>
            <div className={styles.logo}>Filmo<span>teka</span></div>
            <p><ImCross /></p>
            <Links
                option={1}
            />
        </div>
    )
}

export default MobileNav;