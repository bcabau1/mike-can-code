import { Container, Box, Heading, Flex, Divider, useColorModeValue, Stack } from "@chakra-ui/react"
import SnippetBio from "../components/snippetbio"
import ButtonBar from "../components/buttonbar"
import TabBanner from "../components/tabbanner"

export default function Page(router) {
    return (
        <Container h='100%' maxW="100%" pl='10px' >
            <Flex position='relative' w = '100%' h='100%' align='center' overflow='auto' id='intro'>
                <Box position='relative' py='8' w = '100%'>
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
            <Flex position='relative' w = '100%' h='100%' align='center' flexWrap='wrap' justify='center' id='banners' overflow='auto' py='10%'>
                <Heading  w='100%' as="h3" mt='4vh' textAlign='center' variant="banner-title">
                     You should definitely check out my...
                </Heading>
                <TabBanner/>
                <TabBanner/>
                <TabBanner/>
            </Flex>
        </Container>    
    )
}
