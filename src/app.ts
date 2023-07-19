import express from 'express';
import "reflect-metadata"
import { container } from 'tsyringe';
import { NewsController } from './news/news.controller';
import { NewsService } from './news/news.service';

const app = express();

// Set up dependency injection container
container.register(NewsService, { useClass: NewsService });
container.register(NewsController, {useClass: NewsController});

app.get('/api/news', (req, res) => {
  const newsController = container.resolve(NewsController);
  return newsController.getAllNews(req, res);
});

app.get('/api/news/:id', (req, res) => {
  const newsController = container.resolve(NewsController);
  return newsController.getNewsById(req, res);
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});