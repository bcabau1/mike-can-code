import { Box, Flex, Link} from "@chakra-ui/react"
import { ExternalLinkIcon } from '@chakra-ui/icons'
import {SiJavascript, SiReact, SiChakraui, SiFramer, SiNextdotjs, SiPhp, SiMysql, SiPython, SiNumpy, SiLabview} from 'react-icons/si'


const iconpairs = {
    'javascript' : <SiJavascript/>,
    'react' : <SiReact />,
    'chakra' : <SiChakraui s/>,
    'framer' : <SiFramer />,
    'next' : <SiNextdotjs />,
    'php' : <SiPhp />,
    'mysql' : <SiMysql />,
    'python' : <SiPython />,
    'numpy' : <SiNumpy />,
    'labview' : <SiLabview />
}

export default function ProjectBanner(props) {

    return (            
            <Flex m='4' w='1000px' minH='175px'  justify={{base: 'left', sm:'center'}} textAlign='left' flexDir='row' flexWrap={'wrap'}>
                <Flex position='relative' w='100%' p='2'flexDir='column'>
                    <Flex w='100%' h='80%'  align='center' justify='left' fontFamily='snippit' fontSize='calc(.5vw + 12px)'>
                        {props.project?.description ?? `There seems to be a problem loading that information.`}
                    </Flex>
                    <Flex w='100%' h='20%' align='center' justify='space-between'>
                        <Link isExternal href={props.project?.repoLink ?? '/projects/#intro'} fontFamily='heading' fontSize='calc(.5vw + 10px)' color='#72757e' _dark={{color:'#94a1b2' }} py='1'>
                            See the source code. <ExternalLinkIcon ml='1' mb='1'/>
                        </Link>
                        <Flex flexDir='row' justify='space-between' >
                            {props.project?.stack.split(',').map(tool => 
                            <Box w='18px' h='100%' color='#72757e' _dark={{color:'#94a1b2' }} key={tool} mx='1.5'>{iconpairs[tool.trim()]}</Box>)}
                        </Flex> 
                    </Flex>
                </Flex>
            </Flex>   
    )
}