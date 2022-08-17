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
                <Box w="77%" h='100vh' float='right' ml='23%'>
                    {children}
                </Box>
                <Box w={'20%'} h={'100%'} ml='2'>
                    <Sidebar/>
                </Box>
            </Container>
        </Box>
    )
}