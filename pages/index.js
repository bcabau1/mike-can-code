import { Container, Box, Heading, Button } from "@chakra-ui/react"
import SnippetBio from "../components/snippetbio"
import Scene from "../components/cube"
import ButtonBar from "../components/buttonbar"

export default function Page(router) {
    return (
        <Container maxW="container.xl">
        <Box w="70%" float='left' height="100%" outline={'1px solid pink'}>
            <Box display={{md:'flex'}} mt={'20vh'}>
                <Box flexGrow={1}>
                    <Heading as="h1" variant="section-title">
                        Michael Cabau
                    </Heading>
                    <Heading as="h3" variant="sub-title">Software engineer, math buff, and automotive enthusiest</Heading>
                </Box>
            </Box>
            <SnippetBio>
                /* Hello, I'm Mike! <br/>
                I am a software engineer working remotely in Atlanta, Georgia.
                Transportation and the automotive industry are subjects I am passionate about, and these interests motivate
                my personal projects.<br/>
                */
            </SnippetBio>
        </Box>
        <Box w={'30%'} h={'80vh'} ml='70%' outline={'1px solid red'}>
            <Box position='fixed' w='100%' h='100%' outline={'1px solid pink'} ml="0%" mt='0%'>

            </Box>
        </Box>
        </Container>    
    )
}
