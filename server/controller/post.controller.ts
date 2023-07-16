import { Handler, Post } from '../types';
import { db } from '../datastore';
import crypto from 'crypto';
import {
  CreatePostRequest,
  CreatePostResponce,
  ListPostsResponse,
  ListPostsRequest,
} from '../api';

export const createPostController: Handler<
  CreatePostRequest,
  CreatePostResponce
> = (req, res) => {
  const data = req.body;
  if (data.title && data.url && data.userId) {
    const post: Post = {
      id: crypto.randomUUID(),
      title: data.title,
      url: data.url,
      userId: data.userId,
      postedAt: Date.now(),
    };
    db.createPost(post);
    res.status(201).send('post created successfully');
  } else {
    
    return res.sendStatus(400);
  }
  return;
};

export const listPostsController: Handler<
  ListPostsRequest,
  ListPostsResponse
> = (_req, res) => {
  res.send({ posts: db.listPosts() });
};
