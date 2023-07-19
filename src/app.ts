import express from 'express';
import { connectToDatabase } from './news/database.service';
import { newsRouter } from './news/routes/news.router';

const app = express();

connectToDatabase().then(()=>{
  app.use('/api/news', newsRouter)
  app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
  });
}).catch((error: Error)=>{
  console.error("Database connection failed", error);
  process.exit();
});