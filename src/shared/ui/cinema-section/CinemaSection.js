import styles from './CinemaSection.module.scss';
import cinemCityPng from '../../../assets/img/cinemacity.png'
import multikinoPng from '../../../assets/img/multikino.png'

const CinemaSection = () => {
    return(
        <div className={styles.wrapper}>
            <div className={styles.box}>
                <h2>Repertuar Kin</h2>
                <div>
                    <a href='https://www.cinema-city.pl/repertuar' target="blank"><img src={cinemCityPng}></img></a>
                    <a href='https://multikino.pl/repertuar/tarnow' target="blank"><img src={multikinoPng}></img></a>
                    <a href='https://www.helios.pl/39,Nowy-Sacz/Repertuar/' target="blank"><img src={'https://galeriatrzykorony.com.pl/app/uploads/2019/07/HELIOS.png'}></img></a>
                </div>
            </div>
        </div>
    )
}

export default CinemaSection;