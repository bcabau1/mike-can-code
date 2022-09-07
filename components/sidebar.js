import {Box, Flex} from "@chakra-ui/layout"
import Scene from "./scene"
import { Icon, IconButton, useColorModeValue, Center } from '@chakra-ui/react'
import { EmailIcon } from '@chakra-ui/icons'
import { GoMarkGithub } from "react-icons/go";
import { AiFillLinkedin } from "react-icons/ai";



export default function Sidebar()   {
    
    return (
        <Box position='fixed' transform={'translateX(0)'} h='100%' w='20%'>
            <Flex position='relative' w = '100%' h='100%' align='center'  >  
                <Box position='relative' w = '100%' align='center' >
                    <Scene/>
                    
                    <IconButton m='5px'
                    size='lg'
                    isRound={true}
                    aria-label="github"
                    variant="ghost"
                    colorScheme={useColorModeValue('gray', 'gray')}
                    icon={<Icon as={GoMarkGithub} h='25px' w='25px'/>}
                    onClick={() => document.location.href = 'https://github.com/bcabau1'}
                    ></IconButton>

                    <IconButton m='5px'
                    size='lg'
                    isRound={true}
                    aria-label="linked-in"
                    variant="ghost"
                    colorScheme={useColorModeValue('gray', 'gray')}
                    icon={<Icon as={AiFillLinkedin} h='25px' w='25px'/>}
                    onClick={() => document.location.href = 'https://www.linkedin.com/in/brian-cabau-91525b197'}
                    ></IconButton>

                    <IconButton m='5px'
                    size='lg'
                    isRound={true}
                    aria-label="change theme"
                    variant="ghost"
                    colorScheme={useColorModeValue('gray', 'gray')}
                    icon={<Icon as={EmailIcon} h='25px' w='25px'/>}
                    onClick={() => window.open('mailto:bmcabaudev@gmail.com')}
                    ></IconButton>
                </Box>
            </Flex>
        </Box>
    )
    
}

