// import  {  useState } from "react";
// import {Post} from "../../../server/types"

import { useQuery } from 'react-query'
import { listPosts } from "../client";
import PostCard from '../components/PostCard';

function PostsPage() {
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
      const Posts = data?.posts

  return (
   
            <>

      
      <PostCard {...Posts?.at(0)}/>
      <PostCard {...Posts?.at(1)}/>
      <PostCard {...Posts?.at(2)}/>
      
     
    </>
    
  )
}

export default PostsPage