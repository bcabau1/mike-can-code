import { Container, Box, Heading, Flex, Divider, useColorModeValue, Stack } from "@chakra-ui/react"
import SnippetBio from "../components/snippetbio"
import ButtonBar from "../components/buttonbar"
import TabBanner from "../components/tabbanner"
import NextLink from 'next/link'


export default function Page(router) {
    return (
        <Container h='100%' maxW="100%" >
            <Flex position='relative' w = '100%' h='100%' align='center' overflow='auto' >
                <Box position='relative' w = '100%'>
                    <Box display={{md:'flex'}}>
                        <Box flexGrow={1}>
                            <Heading as="h1" variant="section-title" textAlign='center' lineHeight='80px'>
                                Michael Cabau
                            </Heading>
                            <Heading pl='10px' as="h3" mt='4vh' textAlign='center' variant="sub-title">Software engineer, game developer, and car enthusiest</Heading>
                        </Box>
                    </Box>
                    <SnippetBio>
                        Hello, I'm Mike!
                        I am a software engineer and indie game developer working remotely in Atlanta, Georgia.
                        Automotive design and transportation are subjects I am interested in currently. My personal projects are motivated by topics I stumble upon, which
                        provide me with a new engineering challenge and a way to express myself creatively.
                    </SnippetBio>
                    <Divider bg={useColorModeValue('#272343','#94a1b2')} h='1px' borderRadius='full' w='75%' display='block' margin='auto'/>
                    <ButtonBar>Learn more about me.</ButtonBar>
                </Box>
            </Flex>
            <Flex position='relative' w = '100%' h='100%' align='center' flexWrap='wrap' justify='center' id='banners' overflow='auto' py='12.5%' px='12.5%' justifyContent='space-evenly'>
                <Heading  w='100%' as="h3" mt='4vh' textAlign='center' variant="banner-title">
                     You should definitely check out my...
                </Heading>
                <Box p='5%'>
                    <TabBanner href='/experience'/>
                </Box>
                <Box p='5%'>
                    <TabBanner href='/education'/>
                </Box>
                <Box p='5%'>
                    <TabBanner href='/projects'/>
                </Box>
            </Flex>
        </Container>    
    )
}
