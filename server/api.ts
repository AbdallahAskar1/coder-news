import {Post} from "./types"

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


