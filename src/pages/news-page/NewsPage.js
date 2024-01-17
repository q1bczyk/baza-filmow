import styles from './NewsPage.module.scss';
import NewsSection from '../../pages/home/components/news-section/NewsSection';

export const NewsPage = () => {
    return(
        <div className={styles.warpper}>
            <NewsSection/>
        </div>
    )
}

export default NewsPage;