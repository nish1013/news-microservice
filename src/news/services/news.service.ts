import { injectable, singleton } from 'tsyringe';
import newsData from '../data/newsData.json';
import { News as NewsL} from '../models/news.interface';
import News from '../models/news'
import { collections } from './database.service';

@singleton()
export class NewsService {
  async getAllNews(): Promise<News[]> {
    const news = await collections.news?.find({}).toArray() as News[]
    return news;
  }

  getNewsById(id: string): NewsL | undefined {
    return newsData.find((news: NewsL) => news.id === id);
  }
}