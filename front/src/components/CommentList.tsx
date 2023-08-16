import { Box, Text, VStack } from '@chakra-ui/react';

const CommentList = ({ comments }) => {
  return (
    <VStack spacing={4} align="stretch" m={10} maxW={1000}>
      {comments.map((comment, index) => (
        <Box
          key={index}
          borderWidth="1px"
          borderRadius="md"
          p={4}
          backgroundColor="gray.100"
        >
          <Text>{comment}</Text>
        </Box>
      ))}
    </VStack>
  );
};

export default CommentList;
