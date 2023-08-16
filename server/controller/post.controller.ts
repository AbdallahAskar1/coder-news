import { Handler, Post } from '../types';
import { db } from '../datastore/dao';
import crypto from 'crypto';
import {
    CreatePostRequest,
    CreatePostResponce,
    ListPostsResponse,
    ListPostsRequest,
    getPostRequest,
    getPostResponse,
} from '../api';

export const createPostController: Handler<
    CreatePostRequest,
    CreatePostResponce
> = async(req, res) => {
    const data = req.body;
    if (data.title && data.url) {
      
        const post: Post = {
            id: crypto.randomUUID(),
            title: data.title,
            url: data.url,
            userId: res.locals.userId,
            postedAt: Date.now(),
        };
       await db.createPost(post);
        res.status(201).send({message:'post created successfully'});
    } else {
        return res.status(400).send({message:"please send title , url and userId in request "});
    }
    return;
};

export  const listPostsController : Handler<
    ListPostsRequest,
    ListPostsResponse
> = async(_req, res) => {
    res.send({ posts: await db.listPosts() });
};



export const getPostController: Handler<
    getPostRequest,
    getPostResponse
> = async (_req, res) => {
    // const {id} =req.params
    const id = '14475ba0-9054-4ab0-a03b-5f15767b8eab';
    if (!id) {
        return res.status(400).send({ error: 'id missing' });
    }
    const posta = await db.getPost(id);
    return res.send({ post: posta });
};

