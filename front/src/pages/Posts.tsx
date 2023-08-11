import  {  useState } from "react";
import {Post} from "../../../server/types"

import { useQuery } from 'react-query'
import { listPosts } from "../client";

function PostsPage() {
    const [posts, setPosts] = useState<Post[]>();

    const {data, isLoading, error}= useQuery(['list-posts'], listPosts)
   

      if(isLoading){
        return(
          <div>
            is isLoading
          </div>
        )
      }
        if(error){
          return(
            <div>
              error
            </div>
          )
        }
      
    if(data){
      setPosts(data.posts)
    }
  return (
   
            <>

      <h1>List Posts 
      {posts?.map(post=>post.title)}
      </h1>
      <code>
      {JSON.stringify(data?.posts[0])}
      </code>
    </>
    
  )
}

export default PostsPage