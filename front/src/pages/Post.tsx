import {useParams} from 'react-router-dom';
import PostCard from '../components/PostCard';
import { useQuery } from 'react-query';
import { getPostWithId } from '../client';

import { useState } from 'react';
import { Center , Divider, Spinner,Box ,Button, Textarea} from '@chakra-ui/react'
import CommentList from '../components/CommentList';
import AddCommentForm from '../components/AddCommentForm';

function PostPage() {
    const {id} = useParams();
    const [comments, setComments] = useState([]);

  const handleAddComment = (newComment) => {
    
    setComments([...comments, newComment]);
  };

    const {data, isLoading, error}=useQuery(['get-post-with-id',id],()=>getPostWithId(id));
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
    const Post = data?.post

    


  return (
    <>
    {/* <div>PostPage {id}</div> */}
      <PostCard {...Post}/>
      <AddCommentForm  onSubmit={handleAddComment}/>
      <Divider mt={4} mb={4} mx={'auto'} maxW={800}/>
      <CommentList comments={comments}/>

    </>
  )  
}

export default PostPage