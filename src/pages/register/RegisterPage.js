import { useState } from 'react';
import Logo from '../../components/navbar/logo/Logo';
import styles from './RegisterPage.module.scss';
import { isEmail, loginValid, passwordValid, signUpValid } from '../../shared/validate/formsValid';
import { createAccount } from '../../api/UserApi';
import { useDispatch } from 'react-redux';
import Loader from '../../shared/ui/loader/Loader';

const RegisterPage = () => {

    const dispatch = useDispatch();

    const[login, setLogin] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    const[isLoading, setLoading] = useState(false);

    const showAlert = (title, instructions) => {
        dispatch({type: 'SHOW_ALERT', payload : {title : title, instructions : instructions}})
    }

    const handleCreateAccount = async () => {

        if(!signUpValid(email, login, password))
            return

        setLoading(true);

        const data = {
            name : login,
            email : email,
            password : password,
        }

        try{
            const response = await createAccount(data);
            showAlert('Sukces!', 'udało się żałożyć konto');
        } catch (error){
            if(error.response.status === 400)
                showAlert('Błędne dane!', 'sprawdź poprawność danych');
            else if(error.response.status === 500)
                showAlert('Błęd serwera!', 'spróbuj ponownie później');
        }

        setLoading(false)
    }

    return(
        <div className={styles.container}>
            {isLoading === true ? <Loader/> : null}
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
                <button className={signUpValid(email, login, password) ? styles.activeButton : null} onClick={handleCreateAccount}>Załóż konto</button>
            </div>
        </div>
    )

}

export default RegisterPage;

