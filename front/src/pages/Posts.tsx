// import  {  useState } from "react";
// import {Post} from "../../../server/types"
import { Button, Center , Spinner } from '@chakra-ui/react'
import { useQuery } from 'react-query'
import { listPosts } from "../client";
import PostCard from '../components/PostCard';

function PostsPage() {
  const {data, isLoading, error}= useQuery(['list-posts'], listPosts)
    


      if(isLoading){
        return(
          <Center  h={20} >
            <Spinner size={'lg'} color={'#D36D34'}  emptyColor='gray.200' thickness='4px' />
          </Center>
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
      <PostCard {...Posts?.at(0)}/>
      <PostCard {...Posts?.at(1)}/>
      <PostCard {...Posts?.at(2)}/>
      <PostCard {...Posts?.at(0)}/>
      <PostCard {...Posts?.at(1)}/>
      <PostCard {...Posts?.at(2)}/>
      <PostCard {...Posts?.at(0)}/>
      <PostCard {...Posts?.at(1)}/>
      <PostCard {...Posts?.at(2)}/>
      
      <PostCard {...Posts?.at(0)}/>
      <PostCard {...Posts?.at(1)}/>
      <PostCard {...Posts?.at(2)}/>
      
      <PostCard {...Posts?.at(0)}/>
      <PostCard {...Posts?.at(1)}/>
      <PostCard {...Posts?.at(2)}/>
      
      <PostCard {...Posts?.at(0)}/>
      <PostCard {...Posts?.at(1)}/>
      <Button mx={10} variant={'link'} size={'sm'}>+More</Button>
      
    </>
    
  )
}

export default PostsPage