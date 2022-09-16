import { Container, Box, Heading, Flex, Divider, useColorModeValue, Text } from "@chakra-ui/react"
import SnippetBio from "../components/snippetbio"
import ButtonBar from "../components/buttonbar"
import TabBanner from "../components/tabbanner"
import AttributeFooter from "../components/footer"
import PageAnimate from "../components/layouts/pageanimate"
import TitleLoop from "../components/titleloop"


export default function Page(router) {
    return (
        <PageAnimate>
            <Flex position='relative' w = '100%' h='100%' align='center' justifyContent='center' overflow='auto' >
                <Box position='relative' w = '100%'>
                    <Box display={{md:'flex'}}>
                        <Box flexGrow={1} overflowX='hidden'>
                        <Heading as="h1" variant="section-title" textAlign='center' >Michael Cabau</Heading>
                            <Heading pl='10px' as="h3" mt='1vh' textAlign='center' variant="sub-title">Software engineer, game developer, and car enthusiest</Heading>
                        </Box>
                    </Box>
                    <SnippetBio>
                        Hello, I'm Mike!
                        I am a software engineer working remotely in Atlanta, Georgia.
                        Automotive design and transportation are subjects I am interested in currently. My personal projects are motivated by topics I stumble upon, which
                        provide me with a new engineering challenge and a way to express myself creatively.
                    </SnippetBio>
                    <Divider bg={useColorModeValue('#272343','#94a1b2')} h='1px' borderRadius='full' w='90%' display='block' margin='auto'/>
                    <ButtonBar>Learn more about me.</ButtonBar>
                </Box>
            </Flex>
            <Flex position='relative' w = '100%' h='100%' p='12%' textAlign='center' flexWrap='wrap' id='banners' overflow='auto' alignItems='center' justifyContent='space-evenly' >

                <Heading  w='100%' as="h3" variant="banner-title">
                     You can find out more about my...
                </Heading>
                <Box px='4%'>
                    <TabBanner imgsrc='/images/graduation-hat.png' href='/education' name='Education' path={router.aspath}/>
                </Box>
                <Box px='4%' >
                    <TabBanner imgsrc='/images/briefcase.png' href='/experience' name='Experience' path={router.aspath}/>
                </Box>
                <Box px='4%'>
                    <TabBanner imgsrc='/images/pencil.png' href='/projects' name='Projects' path={router.aspath}/>
                </Box>
            </Flex>
            <AttributeFooter>© 2022 Brian Cabau. All Rights Reserved. Icons created by IwitoStudio - Flaticon</AttributeFooter>
        </PageAnimate>   
    )
}
