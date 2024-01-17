import { defer } from 'react-router-dom';
import { newsData } from '../../localdata/newsData';

export const newsLoader = (meta) => {
    const newsId = meta.params.newsId;
    const news = newsData.find(element => element.id === newsId);

    return defer({
        news : news
    });
}