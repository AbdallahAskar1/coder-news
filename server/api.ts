import { Secret } from "jsonwebtoken"
import {Comment, Post, User} from "./types"

// #> post API <# //

export type CreatePostRequest = Pick<Post, 'title' | 'url' >
export interface CreatePostResponce {message:String}

export interface ListPostsRequest {};
export interface ListPostsResponse { posts:Post[]};

export interface getPostRequest {};
export interface getPostResponse {post:Post}

// #> comment API <# //
export type CreateCommentRequest = Pick<Comment,"comment" >
export interface CreateCommentResponse {message:String}

export type ListCommentRequest = Pick<Comment,'postId'>
export interface ListCommentResponce {comments:Comment[]}


// #> Like API <# //


// #> user API <# //

export type signUpRequest =Pick<User,'firstName'|"lastName"|"email"|"password"|'username'>
export interface signUpResponse {jwt:Secret}

export interface signInRequest {
    login:string,
    password:string
}
export type signInResponse = {
    user:Pick<User,"email"|"firstName"|"lastName"|"username"|"id">
    jwt:Secret
}
