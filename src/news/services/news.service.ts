import { singleton } from 'tsyringe';
import News from '../models/news'
import { collections } from './database.service';
import { ObjectId } from 'mongodb';

@singleton()
export class NewsService {
  async getAllNews(): Promise<News[]> {
    const news = await collections.news?.find({}).toArray() as News[]
    return news;
  }

  async getNewsById(id: string): Promise<News | undefined> {
    const query = {_id: new ObjectId(id)}
    const news = (await collections.news?.findOne(query)) as News
    return news;
  }
}