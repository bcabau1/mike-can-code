import { Container, Box, Heading, Flex, Divider, useColorModeValue } from "@chakra-ui/react"
import SnippetBio from "../components/snippetbio"
import ButtonBar from "../components/buttonbar"
import TabBanner from "../components/tabbanner"

export default function Page(router) {
    return (
        <Container h='100%' maxW="100%" pl='10px' mt='20px'>
            <Flex position='relative' w = '100%' h='100%' align='center'>
                <Box>
                    <Box display={{md:'flex'}}>
                        <Box flexGrow={1}>
                            <Heading as="h1" variant="section-title" textAlign='center' lineHeight='75px'>
                                Michael Cabau
                            </Heading>
                            <Heading pl='10px' as="h3" mt='4vh' textAlign='center' variant="sub-title">Software engineer, game developer, and math buff</Heading>
                        </Box>
                    </Box>
                    <SnippetBio>
                        Hello, I'm Mike!
                        I am a software engineer and indie game developer working remotely in Atlanta, Georgia.
                        Transportation and automotive design are subjects I am passionate about, and these interests motivate
                        my personal projects.
                    </SnippetBio>
                    <Divider bg={useColorModeValue('#272343','#94a1b2')} h='1px' borderRadius='full' w='75%' display='block' margin='auto'/>
                    <ButtonBar>Learn more about me.</ButtonBar>
                </Box>
            </Flex>
            <Flex position='relative' w = '100%' h='100%' mt='20px' align='center' justify='center' border='1px solid white' id='banners'>
                <TabBanner/>
                <TabBanner/>
                <TabBanner/>
            </Flex>
        </Container>    
    )
}
