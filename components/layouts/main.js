import Head from 'next/head'
import Navbar from '../navbar'
import {Box, Container } from '@chakra-ui/react'
import Scene from '../cube'

export default function Main({children, router})  {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <title>Mike Can Code - Home</title>
            </Head>
            <Navbar path={router.aspath}/>
            <Container maxW="container.2xl" pt={14}>
                {children}
            </Container>
        </Box>
    )
}