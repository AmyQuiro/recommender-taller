import { Router } from 'express';
import { googleRecommederRoute } from './routes/recomender/googleRecommenderRoute';


const v1Router = Router();

v1Router.get('/', (req, res) => {
  return res.json({ message: 'This API is up and running 🎉' });
});


v1Router.use('/recommender', googleRecommederRoute);

export { v1Router };
