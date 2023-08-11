// import  {  useState } from "react";
// import {Post} from "../../../server/types"

import { useQuery } from 'react-query'
import { listPosts } from "../client";

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
      

  return (
   
            <>

      <h1>List Posts 
      {data?.posts?.map(post=>{
        return(<div key={post.id}>{post.title}</div>)}
        )
        }
      </h1>
      <code>
      {/* {JSON.stringify(data?.posts[0])} */}
      </code>
    </>
    
  )
}

export default PostsPage