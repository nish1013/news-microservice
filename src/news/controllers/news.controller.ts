import { Request, Response } from 'express';
import { injectable, inject } from 'tsyringe';
import { NewsService } from '../services/news.service';

@injectable()
export class NewsController {
  constructor(@inject(NewsService) private newsService: NewsService) {}

  async getAllNews(req: Request, res: Response): Promise<Response> {
    const news = await this.newsService.getAllNews();
    return res.json(news);
  }

  async getNewsById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const news = await this.newsService.getNewsById(id);
    if (news) {
      return res.json(news);
    }
    return res.status(404).json({ error: 'News not found' });
  }
}