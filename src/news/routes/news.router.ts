import express from 'express';
import "reflect-metadata"
import { container } from 'tsyringe';
import { NewsController } from '../news.controller';
import { NewsService } from '../news.service';


export const newsRouter = express.Router();
newsRouter.use(express.json())

// Set up dependency injection container
container.register(NewsService, { useClass: NewsService });
container.register(NewsController, {useClass: NewsController});

newsRouter.get('/', (req, res) => {
  const newsController = container.resolve(NewsController);
  return newsController.getAllNews(req, res);
});

// newsRouter.get('/api/news/:id', (req, res) => {
//   const newsController = container.resolve(NewsController);
//   return newsController.getNewsById(req, res);
// });