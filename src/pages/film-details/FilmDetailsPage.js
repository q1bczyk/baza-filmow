import { useSearchParams } from 'react-router-dom';
import styles from './FilmDetailsPage.module.scss';
import { filmData } from '../../localdata/filmData';

const FilmDetailsPage = () => {

    const [searchParams] = useSearchParams();
    const id = searchParams.get('id');

    const data = filmData[id - 1];

    return(
        <div className={styles.container}>
            <div className={styles.img}>
                <img src={data.img}></img>
            </div>
            <div className={styles.descriptionBox}>
                <h4>Film</h4>
                <h2>{data.title}</h2>
                <div className={styles.description}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
                <div className={styles.info}>
                    <p>reżyseria: <span>Adrian Apanel</span></p>
                    <p>gatunek: <span>Komedia</span></p>
                    <p>produkcja: <span>Polska</span></p>
                    <p>premiera: <span>18 września 2023</span></p>
                </div>
            </div>
        </div>
    )
}

export default FilmDetailsPage;