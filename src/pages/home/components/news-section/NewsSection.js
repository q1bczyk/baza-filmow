import { useNavigate } from 'react-router-dom';
import { newsData } from '../../../../localdata/newsData';
import NewsItem from './news-item/NewsItem';
import styles from './NewsSection.module.scss'

const NewsSection = () => 
{
    const navigate = useNavigate();
    const data = newsData;

    return(
        <div className={styles.container} >
            <div className={styles.grid}>
                {data.map((data, index) => (
                    <NewsItem
                        key={data.id}
                        id={data.id}
                        index={index}
                        order={index + 1}
                        img={data.imgUrl}
                        text={data.text}
                    />
                ))}
            </div>
        </div>
    )
}

export default NewsSection;