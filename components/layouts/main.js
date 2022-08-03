import Head from 'next/head'
import Navbar from '../navbar'
import {Box, Container } from '@chakra-ui/react'
import Sidebar from '../sidebar'
import Scene from '../scene'

export default function Main({children, router})  {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <title>Mike Can Code - Home</title>
            </Head>
            <Navbar path={router.aspath}/>
            <Container maxW="container.xl" pt={14}>
                <Box w="70%" float='left'>
                    {children}
                </Box>
                <Box w={'30%'} h={'100%'} ml='70%' outline='1px solid pink'>
                    <Sidebar/>
                </Box>
            </Container>
            
        </Box>
    )
}