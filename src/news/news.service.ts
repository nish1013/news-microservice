import { injectable, singleton } from 'tsyringe';
import newsData from './data/newsData.json';
import { News } from './news.interface';

@singleton()
export class NewsService {
  getAllNews(): News[] {
    return newsData;
  }

  getNewsById(id: string): News | undefined {
    return newsData.find((news: News) => news.id === id);
  }
}