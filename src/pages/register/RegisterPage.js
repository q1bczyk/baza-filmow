import { useState } from 'react';
import Logo from '../../components/navbar/logo/Logo';
import styles from './RegisterPage.module.scss';
import { isEmail, loginValid, passwordValid, signUpValid } from '../../shared/formsValid';

const RegisterPage = () => {

    const[login, setLogin] = useState('');
    const[accountName, setAccountName] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[passwordRpt, setPasswordRpt] = useState('');

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
                        style={{border : loginValid(login) ? null : 'solid 2px #ff5d5d'}}
                        >
                    </input>
                </div>
                <div>
                    <label>Nazwa konta</label>
                    <input 
                        type='text'
                        placeholder='nazwa konta'
                        value={accountName}
                        onChange={(event) => setAccountName(event.target.value)}
                        style={{border : loginValid(accountName) ? null : 'solid 2px #ff5d5d'}}
                        >
                    </input>
                </div>
                <div>
                    <label>Email</label>
                    <input 
                        type='text'
                        placeholder='email'
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        style={{border : isEmail(email) ? null : 'solid 2px #ff5d5d'}}
                        >
                    </input>
                </div>
                <div>
                    <label>Hasło</label>
                    <input 
                        type='password'
                        placeholder='hasło'
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        style={{border : passwordValid(password) ? null : 'solid 2px #ff5d5d'}}
                        >
                    </input>
                </div>
                <div>
                    <label>Powtórz hasło</label>
                    <input 
                        type='password'
                        placeholder='hasło'
                        value={passwordRpt}
                        onChange={(event) => setPasswordRpt(event.target.value)}
                        style={{border : passwordValid(passwordRpt) ? null : 'solid 2px #ff5d5d'}}
                        >
                    </input>
                </div>
                <button className={signUpValid(email, login, accountName, password, passwordRpt) ? styles.activeButton : null}>Załóż konto</button>
            </div>
        </div>
    )

}

export default RegisterPage;

