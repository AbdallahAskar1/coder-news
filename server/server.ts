import express from 'express';
import {
  createPostController,
  listPostsController,
} from './controller/post.controller';

import dotenv from 'dotenv'
import {errorHandler} from './middleware/ErrorMiddleware'
import cors from 'cors';
import asyncHandler from 'express-async-handler';
import { initDb } from './datastore';
import { signInController, signUpController } from './controller/auth.controller';
// import { authMiddleware } from './middleware/AuthMiddleware';

(async ()=>{
  
  //m
  await initDb()
  dotenv.config()
  const app = express();
  app.use(express.json());
  app.use(cors())

app.get("/",(_req,res)=>{
  res.send(`<h1>Hello from server</h1>`)
})
app.get('/healthz', (_req, res) => {
  res.send({status : "Healthy❣️"});
});

app.post('/v1/signup',asyncHandler(signUpController))
app.get("/v1/login",asyncHandler(signInController))

// app.use(authMiddleware);

app.get('/v1/posts', asyncHandler(listPostsController));
app.post('/v1/posts', asyncHandler(createPostController));
app.use(errorHandler);
const port = process.env.PORT || 3000 ;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

})()
