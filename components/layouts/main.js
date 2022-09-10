import Head from 'next/head'
import Navbar from '../navbar'
import {Box, Container } from '@chakra-ui/react'
import Sidebar from '../sidebar'

export default function Main({children, router})  {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <title>Michael Cabau - Home</title>
            </Head>
            <Navbar path={router.aspath}/>
            <Container maxW="container.xl">
                
                <Box w="100%" h='100vh' pt='14' variant='main-content' id='intro'>
                    {children}
                </Box>
            </Container>
        </Box>
    )
}