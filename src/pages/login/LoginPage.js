import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../components/navbar/logo/Logo';
import styles from './LoginPage.module.scss';

import { isEmail } from '../../shared/formsValid';


const LoginPage = () => 
{

    const[login, setLogin] = useState('');
    const[password, setPassword] = useState('');

    return(
        <div className={styles.container}>
            <div className={styles.logo}>
                <Logo/>
            </div>
            <div className={styles.form}>
                <div>
                    <label>Login</label>
                    <input 
                        type='text'
                        placeholder='login'
                        value={login}
                        onChange={(event) => setLogin(event.target.value)}
                        style={{backgroundColor : isEmail(login) ? null : '#ff5d5d'}}>
                    </input>
                </div>
                <div>
                    <label>Hasło</label>
                    <input 
                        type='password'
                        placeholder='hasło'
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}>
                    </input>
                </div>
                <button className={isEmail(login) ? styles.activeButton : null}>Zaloguj się</button>
            </div>
            <div className={styles.others}>
                <p><NavLink to='/signup'>Załóż konto</NavLink></p>
                <p>Resetuj hasło</p>
            </div>
        </div>
    )
}

export default LoginPage;