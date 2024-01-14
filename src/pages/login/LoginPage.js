import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../components/navbar/logo/Logo';
import styles from './LoginPage.module.scss';

import { loginValid, passwordValid, signInValid } from '../../shared/validate/formsValid';


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
                        style={{border : loginValid(login) ? null : 'solid 2px #ff5d5d'}}>
                    </input>
                </div>
                <div>
                    <label>Hasło</label>
                    <input 
                        type='password'
                        placeholder='hasło'
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        style={{border : passwordValid(password) ? null : 'solid 2px #ff5d5d'}}>
                    </input>
                </div>
                <button className={signInValid(login, password) ? styles.activeButton : null}>Zaloguj się</button>
            </div>
            <div className={styles.others}>
                <p><NavLink to='/signup'>Załóż konto</NavLink></p>
                <p>Resetuj hasło</p>
            </div>
        </div>
    )
}

export default LoginPage;