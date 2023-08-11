import {Box,Button,Flex,Image, color}from '@chakra-ui/react';
import Logo from "../assets/coder-news-logo.svg"

function Navbar(props) {
  return (
    <div>
        <Flex justify={'space-between'} m={6} mx={8} alignItems={'center'}>
            <Box>
                <Image src={Logo} w={40} />
            </Box>
            <Flex gap={2}>
                <Button variant={'outline'}>login</Button>
                <Button >signup</Button>
            </Flex>
        </Flex>
        {props.children}
    </div>
  )
}

export default Navbar