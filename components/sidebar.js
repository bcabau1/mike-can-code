import {Box, Flex} from "@chakra-ui/layout"
import Scene from "./scene"
import { Icon, IconButton, useColorModeValue } from '@chakra-ui/react'
import { EmailIcon } from '@chakra-ui/icons'
import { GoMarkGithub } from "react-icons/go";
import { AiFillLinkedin } from "react-icons/ai";



export default function Sidebar()   {

    return (
        <Box position='fixed' transform={'translateX(0)'} h='100%' w='15%'  >
            <Flex position='relative' w = '100%' h='100%' align='center' >  
                <Box position='relative' w = '100%' align='center' mt='35px' >
                    <Scene/>
                    
                    <IconButton mr='8px'
                    size='lg'
                    isRound={true}
                    aria-label="change theme"
                    variant="ghost"
                    colorScheme={useColorModeValue('gray', 'gray')}
                    icon={<Icon as={GoMarkGithub} h='25px' w='25px'/>}
                    ></IconButton>

                    <IconButton mr='8px'
                    size='lg'
                    isRound={true}
                    aria-label="change theme"
                    variant="ghost"
                    colorScheme={useColorModeValue('gray', 'gray')}
                    icon={<Icon as={AiFillLinkedin} h='25px' w='25px'/>}
                    ></IconButton>

                    <IconButton
                    size='lg'
                    isRound={true}
                    aria-label="change theme"
                    variant="ghost"
                    colorScheme={useColorModeValue('gray', 'gray')}
                    icon={<Icon as={EmailIcon} h='25px' w='25px'/>}
                    ></IconButton>                  
                </Box>
            </Flex>
        </Box>
    )
    
}

