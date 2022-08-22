import Head from 'next/head'
import Navbar from '../navbar'
import {Box, Container } from '@chakra-ui/react'
import Sidebar from '../sidebar'

export default function Main({children, router})  {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <title>Mike Can Code - Home</title>
            </Head>
            <Navbar path={router.aspath}/>
            <Container maxW="container.2xl">
                <Box w="80%" h='100vh' float='right' ml='18%' variant='main-content'>
                    {children}
                </Box>
                <Box w={'18%'} h={'100%'} ml='2' variant='side-bar'>
                    <Sidebar/>
                </Box>
            </Container>
        </Box>
    )
}