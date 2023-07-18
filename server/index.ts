import express, { ErrorRequestHandler } from 'express';
import {
  createPostController,
  listPostsController,
} from './controller/post.controller';

import asyncHandler from 'express-async-handler';
import { initDb } from './datastore';
import { signInController, signUpController } from './controller/user.controller';

(async ()=>{
  await initDb()
  const app = express();
  
const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
  console.error('error:', err);
  return res.status(500).send('an unexpected error occurred please try again');
};

app.use(express.json());
app.get('/', (_req, res) => {
  res.send('hello world');
});

app.get('/v1/posts', asyncHandler(listPostsController));
app.post('/v1/posts', asyncHandler(createPostController));

app.post('/v1/signup',asyncHandler(signUpController))
app.get("/v1/login",signInController)
app.use(errorHandler);

app.listen(3000, () => {
  console.log('server is running on port 3000');
});

})()
