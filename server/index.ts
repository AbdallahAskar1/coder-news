import express, { ErrorRequestHandler } from 'express';
import {
  createPostController,
  listPostsController,
} from './controller/post.controller';
const app = express();

const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
  console.error('error:', err);
  return res.status(500).send('an unexpected error occurred please try again');
};

app.use(express.json());
app.get('/', (_req, res) => {
  res.send('hello world');
});

app.get('/posts', listPostsController);
app.post('/posts', createPostController);

app.use(errorHandler);

app.listen(3000, () => {
  console.log('server is running on port 3000');
});
