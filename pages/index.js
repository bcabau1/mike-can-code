import { Container, Box, Center,Heading, Flex, Divider, useColorModeValue, Text } from "@chakra-ui/react"
import SnippetBio from "../components/snippetbio"
import ButtonBar from "../components/buttonbar"
import TabBanner from "../components/tabbanner"
import AttributeFooter from "../components/footer"
import PageAnimate from "../components/layouts/pageanimate"
import TitleLoop from "../components/titleloop"


export default function Page(router) {
    return (
        <PageAnimate>
            <Flex position='relative' w = '100%' h='100%' align='center' justifyContent='center' overflow='auto'>
                <Flex position='relative' w = '100%' h='100%' align='center' justifyContent='center' overflow='auto' flexWrap={'wrap'}>
                    <Flex w='600px' align='center' justify='center' p='3'>
                        <Box flexGrow={1} overflowX='hidden'>
                        <Heading as="h1" variant="section-title" textAlign='left' >Michael Cabau</Heading>
                            <Heading mr='3' as="h3" mt='1vh' textAlign='left' variant="sub-title">Software engineer, game developer, and car enthusiest</Heading>
                        </Box>
                    </Flex>
                    <Flex w='600px' align='center' justify='center' bg={useColorModeValue('#fffffe', '#242629')} borderRadius='xl' boxShadow={useColorModeValue('lg', 'dark-lg')}>
                    <SnippetBio>
                        Hello, I'm Mike!
                        I am a software engineer working remotely in Atlanta, Georgia.
                        My personal projects are motivated by topics I stumble upon, which
                        provide me with a new engineering challenge and a way to express myself creatively.
                    </SnippetBio>
                    </Flex>
                </Flex>
            </Flex>
            <Flex position='relative' w = '100%' h='100%' p='13.5%' textAlign='center' flexWrap='wrap' id='banners' overflow='auto' alignItems='center' justifyContent='space-evenly' >

                <Heading  w='100%' as="h3" variant="banner-title">
                     You can find out more about my...
                </Heading>
                <Box px='4%'>
                    <TabBanner imgsrc='/images/graduation-hat.png' href='education/#intro' name='Education' path={router.aspath}/>
                </Box>
                <Box px='4%' >
                    <TabBanner imgsrc='/images/briefcase.png' href='experience/#intro' name='Experience' path={router.aspath}/>
                </Box>
                <Box px='4%'>
                    <TabBanner imgsrc='/images/pencil.png' href='projects/#intro' name='Projects' path={router.aspath}/>
                </Box>
            </Flex>
            <AttributeFooter>© 2022 Brian Cabau. All Rights Reserved. Icons created by IwitoStudio - Flaticon</AttributeFooter>
        </PageAnimate>   
    )
}
