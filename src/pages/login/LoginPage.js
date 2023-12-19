import styles from './LoginPage.module.scss';

const LoginPage = () => 
{
    return(
        <div className={styles.container}>
            <div className={styles.form}>
                <div>
                    <label>Email</label>
                    <input 
                        type='email'
                        placeholder='email'>
                    </input>
                </div>
                <div>
                    <label>Hasło</label>
                    <input 
                        type='password'
                        >
                    </input>
                </div>
                <button>Zaloguj się</button>
            </div>
        </div>
    )
}

export default LoginPage;