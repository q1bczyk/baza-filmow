import { useEffect, useState } from 'react';
import { genres as genresData } from '../../localdata/genres';
import styles from './AddFilmPage.module.scss';
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { addMovie } from '../../api/MoviesApi';
import { useDispatch } from 'react-redux';
import { isExpired } from 'react-jwt';
import { useNavigate } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';

const AddFilmPage = () => 
{

    const[title, setTitle] = useState('');
    const[description, setDescription] = useState('');
    const[year, setYear] = useState(2000);
    const[url, setUrl] = useState('');
    const[selectedGenre, setGenre] = useState('horror');
    const[rate, setRate] = useState(0);

    const genres = genresData;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const clearData = () => {
        setTitle('');
        setDescription('');
        setRate(0);
        setUrl('');
    }

    useEffect(() => {
        if(isExpired(localStorage.getItem('token')))
            navigate('/signin');
             
        scroll.scrollToTop({
            duration: 200,
            smooth: true,
        });
    }, []);

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

    const validData = () => {
        if(title === '' || description === '' || url === '' || year === null || selectedGenre === null || (rate < 0 && rate > 9))
            return false;

        return true;    
    }

    const showAlert = (title, instructions) => {
        dispatch({type: 'SHOW_ALERT', payload : {title : title, instructions : instructions}})
    }

    const addFilmHandle = async () =>{

        if(!validData())
            return

        const convertedRate = rate + 1;

        const data = 
        {
            title : title,
            image : url,
            content : description,
            rate : convertedRate,
            productionYear : year,
            genre : selectedGenre,
        }

        try{
            const response = await addMovie(data)
            showAlert('Sukces!', 'pomyślnie dodano film');
            clearData();
        }catch(err){
            showAlert('Błęd serwera!', 'spróbuj ponownie później');
        }
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
                    <label>Zdjęcie</label>
                    <input 
                        type='text'
                        placeholder='url'
                        value={url}
                        onChange={(event) => setUrl(event.target.value)}
                        >
                    </input>
                </div>
                <div>
                    <label>Gatunek</label>
                    <div className="select">
                        <select id="standard-select" value={selectedGenre} onChange={(event) => setGenre(event.target.value)}>
                            {genres.map((genre) => (
                                <option value={genre}>{genre}</option>
                            ))}
                        </select>
                        <span className="focus"></span>
                        </div>
                </div>
                <div>
                    <label>Ocena</label>
                    <div className={styles.stars}>
                        {renderDivs()}
                    </div>
                </div>
                <button 
                    className={validData() ? styles.activeButton : null}
                    onClick={addFilmHandle}>
                        Dodaj</button>
            </div>
        </div>
    )
}

export default AddFilmPage;

//className={signInValid(login, password) ? styles.activeButton : null}