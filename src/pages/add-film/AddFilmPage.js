import styles from './AddFilmPage.module.scss';

const AddFilmPage = () => 
{
    return(
        <div className={styles.container}>
            <div className={styles.form}>
                <h2>Dodaj film</h2>
                <div>
                    <label>Tytuł</label>
                    <input 
                        type='text'
                        placeholder='tytuł'
                        // value={login}
                        // onChange={(event) => setLogin(event.target.value)}
                        // style={{border : loginValid(login) ? null : 'solid 2px #ff5d5d'}}
                        >
                    </input>
                </div>
                <div>
                    <label>Opis</label>
                    <input 
                        type='text'
                        placeholder='opis'
                        // value={password}
                        // onChange={(event) => setPassword(event.target.value)}
                        // style={{border : passwordValid(password) ? null : 'solid 2px #ff5d5d'}}
                        >
                    </input>
                </div>
                <button>Dodaj</button>
            </div>
        </div>
    )
}

export default AddFilmPage;

//className={signInValid(login, password) ? styles.activeButton : null}