import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import styles from './NotFound.module.scss';

const NotFound = () => {

    const navigate = useNavigate();
    const [time, setTime] = useState(3);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(prevTime => prevTime - 1); 
        }, 1000);

        setTimeout(() => {
            navigate('/');
            clearInterval(interval);
        }, 3000);
        
        return () => clearInterval(interval);
    }, [navigate]);

    return(
        <div className={styles.wrapper}>
            <div className={styles.box}>
                <h1>404</h1>
                <h3>Strona o podanej ścieżce nie istnieje</h3>
                <h5>przekierowanie na strone główna za {time}s</h5>
            </div>
        </div>
    )
}

export default NotFound;