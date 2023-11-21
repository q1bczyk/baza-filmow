import { testData } from '../../../../localdata/newsData';
import NewsItem from './news-item/NewsItem';
import styles from './NewsSection.module.scss'

const NewsSection = () => 
{
    const test = testData;

    return(
        <div className={styles.container}>
            <div className={styles.grid}>
                {test.map((data, index) => (
                    <NewsItem
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