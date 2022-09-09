import { Container, Box, Heading, Flex, Divider, useColorModeValue, Text } from "@chakra-ui/react"
import SnippetBio from "../components/snippetbio"
import ButtonBar from "../components/buttonbar"
import TabBanner from "../components/tabbanner"
import AttributeFooter from "../components/footer"

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
                        I am a software engineer working remotely in Atlanta, Georgia.
                        Automotive design and transportation are subjects I am interested in currently. My personal projects are motivated by topics I stumble upon, which
                        provide me with a new engineering challenge and a way to express myself creatively.
                    </SnippetBio>
                    <Divider bg={useColorModeValue('#272343','#94a1b2')} h='1px' borderRadius='full' w='75%' display='block' margin='auto'/>
                    <ButtonBar>Learn more about me.</ButtonBar>
                </Box>
            </Flex>
            <Flex position='relative' w = '100%' h='100%' align='center' flexWrap='wrap' justify='center' id='banners' overflow='auto' p='10%'  justifyContent='space-evenly'>
                <Heading  w='100%' as="h3" mt='4vh' textAlign='center' variant="banner-title">
                     You should definitely check out my...
                </Heading>
                <Box p='5%' >
                    <TabBanner imgsrc='/images/briefcase.png' href='/experience' name='Experience' path={router.aspath}/>
                </Box>
                <Box p='5%'>
                    <TabBanner imgsrc='/images/graduation-hat.png' href='/education' name='Education' path={router.aspath}/>
                </Box>
                <Box p='5%'>
                    <TabBanner imgsrc='/images/pencil.png' href='/projects' name='Projects' path={router.aspath}/>
                </Box>
            </Flex>
            <AttributeFooter/>
        </Container>    
    )
}
