import { Request, Response } from 'express';
import { injectable, inject } from 'tsyringe';
import { NewsService } from '../services/news.service';

@injectable()
export class NewsController {
  constructor(@inject(NewsService) private newsService: NewsService) {}

  getAllNews(req: Request, res: Response): Response {
    const news = this.newsService.getAllNews();
    return res.json(news);
  }

  getNewsById(req: Request, res: Response): Response {
    const { id } = req.params;
    const news = this.newsService.getNewsById(id);
    if (news) {
      return res.json(news);
    }
    return res.status(404).json({ error: 'News not found' });
  }
}