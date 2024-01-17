import { useLoaderData } from 'react-router-dom';
import styles from './SingleNewsPage.module.scss';

const SingleNewsPage = () => {
    
    const loadedData = useLoaderData();
    const news = loadedData.news;

    return(
        <div className={styles.wrapper}>
            <div className={styles.box}>
                <img src={news.imgUrl}></img>
                <div className={styles.content}>
                    <h3>{news.text}
                    <span/>
                    </h3>
                    <p>{news.content}</p>
                </div>
            </div>
        </div>
    )
}

export default SingleNewsPage;