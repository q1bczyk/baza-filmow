import { useState } from 'react';
import { genres as genresData } from '../../localdata/genres';
import styles from './AddFilmPage.module.scss';
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";


const AddFilmPage = () => 
{

    const[title, setTitle] = useState('');
    const[description, setDescription] = useState('');
    const[year, setYear] = useState(2000);
    const[selectedGenre, setGenre] = useState('horror');
    const[rate, setRate] = useState(0);

    const genres = genresData;

    const renderDivs = () => {
        const divs = [];
        
        for(let i = 0; i < 10; i++){
            if(i <= rate)
                divs.push(<div key={i} onClick={() => setRate(i)}><FaStar/></div>)
            else
                divs.push(<div key={i} onClick={() => setRate(i)}><FaRegStar/></div>) 
        }

        return divs;
    }

    return(
        <div className={styles.container}>
            <div className={styles.form}>
                <h2>Dodaj film</h2>
                <div>
                    <label>Tytuł</label>
                    <input 
                        type='text'
                        placeholder='tytuł'
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                        >
                    </input>
                </div>
                <div>
                    <label>Opis</label>
                    <textarea className={styles.desc} 
                        type='text'
                        placeholder='opis'
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                        >
                    </textarea>
                </div>
                <div>
                    <label>Rok produkcji</label>
                    <input 
                        type='number'
                        value={year}
                        onChange={(event) => setYear(event.target.value)}
                        >
                    </input>
                </div>
                <div>
                    <label>Gatunek</label>
                    <div class="select">
                        <select id="standard-select" value={selectedGenre} onChange={(event) => setGenre(event.target.value)}>
                            {genres.map((genre) => (
                                <option value={genre}>{genre}</option>
                            ))}
                        </select>
                        <span class="focus"></span>
                        </div>
                </div>
                <div>
                    <label>Ocena</label>
                    <div className={styles.stars}>
                        {renderDivs()}
                    </div>
                </div>
                <button className={styles.activeButton}>Dodaj</button>
            </div>
        </div>
    )
}

export default AddFilmPage;

//className={signInValid(login, password) ? styles.activeButton : null}