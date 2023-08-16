import {Box,Button,Flex,Link,Text} from  "@chakra-ui/react"
import { Post } from "../../../server/types"
import {TriangleUpIcon} from "@chakra-ui/icons"

function PostCard(post:Post | undefined)  {
  return (
    <Box mx={10} my={4} >
       <Flex gap={3} >
       
       <TriangleUpIcon color={'gainsboro'}/>  

        <Text fontSize={'md'} fontWeight={'bold'} color={'gray.600'}>
       {post?.title}
        </Text>
        <Text fontSize={'md'}  color={'gray.300'}>
            <span>{('{ ').split("")}</span>
         <Link href={post?.url} target="_blank">
         {shortenUrl(post?.url)}
         </Link>
         <span>{(' }').split("")}</span>

        </Text>
        <Link href={`/post/${post?.id}`}>
        <Button variant={'link'}  size={'sm'} h={5} color={'gray.300'} >comments</Button>
        </Link>
        
       </Flex>
    </Box>
  )
}

export default PostCard

const shortenUrl =(url:string)=>{
  const withProtocol = url.startsWith('http')?url: 'http://'+url
  console.log(url)
  return new URL(withProtocol).hostname;
  return 
}