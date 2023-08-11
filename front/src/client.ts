import {ListPostsResponse} from "../../server/api"

export const URL = process.env.NODE_ENV =="development"?"http://localhost:4000":"http:on"

export const listPosts = async():Promise<ListPostsResponse> =>{
    const res =  await fetch(`${URL}/v1/posts`);
    if(!res.ok){
        const {error} = await res.json();
        throw error;
    }
    return res.json();


}

