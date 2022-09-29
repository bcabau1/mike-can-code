import { Box, Flex, useColorModeValue, Text, Link } from "@chakra-ui/react"
import { ExternalLinkIcon } from '@chakra-ui/icons'
import {SiJavascript, SiReact, SiChakraui, SiFramer, SiNextdotjs, SiPhp, SiMysql, SiPython, SiNumpy} from 'react-icons/si'


export default function ProjectBanner(props) {
    return (            
            <Flex m='4' w='1000px' minH='175px'  justify='center' textAlign='left' >
                <Flex position='relative' w='100%' p='2'    flexDir='column'>
                    <Flex w='100%' h='80%'  align='center' justify='left' fontFamily='snippit' fontSize='18px'>
                        {props.project?.description ?? `There seems to be a problem loading that information.`}
                    </Flex>
                    <Flex w='100%' h='20%' align='center' justify='space-between' border = '1px solid grey'>
                        <Link isExternal href={props.project?.repoLink ?? '/projects/#intro'} fontFamily='heading' color={useColorModeValue('#72757e', '#94a1b2')} py='1'>
                            See the source code. <ExternalLinkIcon ml='1' mb='1'/>
                        </Link>
                        <>
                        <Flex flexDir='row' justify='space-between'>
                            <SiReact/>
                            <SiNextdotjs/>
                            <SiChakraui/>
                            <SiFramer/>
                        </Flex>
                            
                        </>
                    </Flex>
                </Flex>
            </Flex>   
    )
}