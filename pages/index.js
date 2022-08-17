import { Container, Box, Heading, Flex } from "@chakra-ui/react"
import SnippetBio from "../components/snippetbio"
import Scene from "../components/scene"
import ButtonBar from "../components/buttonbar"

export default function Page(router) {
    return (
        <Container h='100%' maxW="100%" pl='0px'>
            <Flex position='relative' w = '100%' h='100%' align='center'>
                <Box>
                    <Box display={{md:'flex'}}>
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
            </Flex>
        </Container>    
    )
}
