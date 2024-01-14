import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../components/navbar/logo/Logo';
import styles from './LoginPage.module.scss';
import { loginValid, passwordValid, signInValid } from '../../shared/validate/formsValid';
import { logIn } from '../../api/UserApi';
import Loader from '../../shared/ui/loader/Loader';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => 
{

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const[login, setLogin] = useState('');
    const[password, setPassword] = useState('');
    const[isLoading, setLoading] = useState(false);
    const[isError , setError]= useState(false)

    useEffect(() => {
        setError(false);
    }, [login, password])

    const showAlert = (title, instructions) => {
        dispatch({type: 'SHOW_ALERT', payload : {title : title, instructions : instructions}})
    }

    const loginClickHandle = async () => {

        if(!loginValid(login, password))
            return

        setLoading(true);

        const data = {
            login : login,
            password : password,
        }

        try{
            const response = await logIn(data);
            localStorage.setItem('token', response.token);
            navigate('/');
        } catch (error){
            console.log(error);
            if(error.response.status === 500)
                showAlert('Błęd serwera!', 'spróbuj ponownie później');
            else if(error.response.status === 401)
                setError(true);
            else
                showAlert('Błędne dane!', 'sprawdź poprawność danych');
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
                <button className={signInValid(login, password) ? styles.activeButton : null}
                onClick={loginClickHandle}
                >
                    Zaloguj się
                    </button>
            </div>
            <div className={styles.others}>
                <p><NavLink to='/signup'>Załóż konto</NavLink></p>
                <p>Resetuj hasło</p>
                {isError ? <p style={{color : 'red'}}>Błedny login lub hasło!</p> : null}
            </div>
        </div>
    )
}

export default LoginPage;