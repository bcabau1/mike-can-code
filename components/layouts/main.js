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
            <Box maxW="100vw">
                <Box w={'18%'} h={'100%'} ml='0' variant='side-bar'>
                    <Sidebar/>
                </Box>
                <Box w="80%" h='100vh' float='right' ml='20%' pt='14' variant='main-content' id='intro'>
                    {children}
                </Box>
            </Box>
        </Box>
    )
}