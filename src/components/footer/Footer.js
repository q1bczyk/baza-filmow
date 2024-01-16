import styles from './Footer.module.scss';
import { FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa';
import Logo from '../navbar/logo/Logo';

const Footer = () => {
    return(
        <div className={styles.wrapper}>
            <div className={styles.box}>
                <div className={styles.icons}>
                    <div><FaFacebook/></div>
                    <div><FaInstagram/></div>
                    <div><FaYoutube/></div>
                </div>
                <div className={styles.logo}>
                    <Logo/>
                    <p>Copyright © 2024</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;