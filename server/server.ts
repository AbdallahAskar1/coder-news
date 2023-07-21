import express from 'express';
import {
  createPostController,
  listPostsController,
} from './controller/post.controller';

import dotenv from 'dotenv'
import {errorHandler} from './middleware/ErrorMiddleware'

import asyncHandler from 'express-async-handler';
import { initDb } from './datastore';
import { signInController, signUpController } from './controller/auth.controller';
import { authMiddleware } from './middleware/AuthMiddleware';

(async ()=>{
  await initDb()
  dotenv.config()
  const app = express();
 
app.use(express.json());
app.get('/', (_req, res) => {
  res.send('hello world');
});
app.post('/v1/signup',asyncHandler(signUpController))
app.get("/v1/login",signInController)

app.use(authMiddleware);

app.get('/v1/posts', asyncHandler(listPostsController));
app.post('/v1/posts', asyncHandler(createPostController));
app.use(errorHandler);

app.listen(3000, () => {
  console.log('server is running on port 3000');
});

})()
