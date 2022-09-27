import { Box, Flex, useColorModeValue, Text, Link } from "@chakra-ui/react"
import { ExternalLinkIcon } from '@chakra-ui/icons'


export default function ProjectBanner(props) {
    return (            
            <Flex m='4' w='800px' minH='175px'  justify='center' textAlign='left' >
                <Flex position='relative' w='88%' p='2'    flexDir='column'>
                    <Flex w='100%' h='85%'  align='center' justify='left' fontFamily='snippit' fontSize='18px'>
                        {props.project?.description ?? `There seems to be a problem loading that information.`}
                    </Flex>
                    <Flex w='100%' h='15%' align='center' justify='left'>
                        <Link isExternal href={props.project?.repoLink ?? '/projects/#intro'} fontFamily='heading' color={useColorModeValue('#72757e', '#94a1b2')} pt='1'>
                            See the source code. <ExternalLinkIcon ml='1' mb='1'/>
                        </Link>
                    </Flex>
                </Flex>
                <Flex position='relative' justify='center' align='center' w='12%' >
                    <Box position='relative' h='90%' w='75%' borderRadius='full' bg= {useColorModeValue('#fffffe', '#242629')}></Box>
                </Flex>
            </Flex>   
    )
}