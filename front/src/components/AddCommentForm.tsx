
import { useState } from 'react';
import {FormControl, Box, Button, Textarea} from '@chakra-ui/react'
function AddCommentForm({onSubmit}) {
    const [comment, setComment] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if (comment.trim().length >= '3') {
            onSubmit(comment);
            setComment('');
          }       
    };
      
  return (
    <Box p={4} borderWidth="1px" borderRadius="md" m={10} maxW={1000}> 
    <form onSubmit={handleSubmit}>
      <FormControl id="comment">
        
        <Textarea
          type="text"
          value={comment}
          size='sm'
          onChange={(e) => setComment(e.target.value)}
          placeholder="Type your comment..."
         
        />
      </FormControl>
      <Button mt={4}  type="submit" >
        Add Comment
      </Button>
    </form>
  </Box>
  )
}

export default AddCommentForm