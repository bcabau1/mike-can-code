import { Container, Box, Heading } from "@chakra-ui/react"
import Card from "../components/card"
import SnippetBio from "../components/snippetbio"
import Scene from "../components/cube"

export default function Page() {
    return (
    <Container maxW="container.xl">
        <Box maxW="70%" float='left' height="100vh" outline={'1px solid pink'}>
            <Box display={{md:'flex'}} mt={'20%'}>
                <Box flexGrow={1}>
                    <Heading as="h1" variant="section-title">
                        Michael Cabau
                    </Heading>
                    <Heading as="h3" variant="sub-title">Software engineer, math buff, and automotive enthusiest</Heading>
                </Box>
            </Box>
            <Card>
                <SnippetBio>
                    /* Hello, I'm Mike! <br/>
                    I am a software engineer working remotely in Atlanta, Georgia.
                    Transportation and the automotive industry are subjects I am passionate about, and these interests motivate
                    my personal projects.<br/>
                    */
                </SnippetBio>
            </Card>
        </Box>
        <Box w={'30%'} h={'750px'} ml='70%'>
            <Scene/>
        </Box>
            
    </Container>
    )
}
