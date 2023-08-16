import {Box,Button,Flex,Image, Link}from '@chakra-ui/react';
import Logo from "../assets/coder-news-logo.svg"

function Navbar(props) {
  return (
    <div>
        <Flex justify={'space-between'} m={6} mx={8} alignItems={'center'}>
            <Box>
                <Link href='/'>
                <Image src={Logo} w={40} />
                </Link>
            </Box>
            <Flex gap={2}>
            <Link href='/auth/login'>             
                <Button variant={'outline'}>login</Button>
                </Link>
                <Link href='/auth/signup'>
                <Button>signup</Button>
                </Link>
            </Flex>
        </Flex>
        {props.children}
    </div>
  )
}

export default Navbar