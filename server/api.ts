import { Secret } from "jsonwebtoken"
import {Post, User} from "./types"

// #> post API <# //

export type CreatePostRequest = Pick<Post, 'title' | 'url' | 'userId'>
export interface CreatePostResponce {message:String}

export interface ListPostsRequest {};
export interface ListPostsResponse { posts:Post[]};

export interface getPostRequest {};
export interface getPostResponse {post:Post}

// #> comment API <# //


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
