import {Box,Button,Flex,Link,Text} from  "@chakra-ui/react"
import { Post } from "../../../server/types"

function PostCard(post:Post | undefined)  {
  return (
    <Box mx={10} my={4}>
       <Flex gap={2} align={'center'}>

        <Text fontSize={'md'} fontWeight={'bold'} color={'gray.600'}>
         {post?.title}
        </Text>
        <Text fontSize={'md'}  color={'gray.300'}>
            <span>{('{ ').split("")}</span>
         <Link href={post?.url} target="_blank">
         {post?.url}
         </Link>
         <span>{(' }').split("")}</span>

        </Text>
        <Link href={`/post/${post.id}`}>
        <Button variant={'outline'} size={'sm'} h={5}  color={'gray.400'}>comments</Button>
        </Link>
        
       </Flex>
    </Box>
  )
}

export default PostCard