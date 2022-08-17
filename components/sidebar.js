import {Box, Flex} from "@chakra-ui/layout"
import Scene from "./scene"
import { IconButton, useColorModeValue } from '@chakra-ui/react'
import { EmailIcon } from '@chakra-ui/icons'
import { GoMarkGithub } from "react-icons/go";
import { AiFillLinkedin } from "react-icons/ai";



export default function Sidebar()   {

    return (
        <Box position='fixed' transform={'translateX(0)'} h='100%' w='25%' >
            <Flex position='relative' w = '100%' h='100%' align='center' border='1px solid red'>  
                <Box position='relative' border='1px solid blue' w = '100%' align='center'>
                    <Scene/>
                    <IconButton
                    isRound={true}
                    size='lg'
                    aria-label="change theme"
                    variant="ghost"
                    colorScheme={useColorModeValue('gray', 'gray')}
                    icon={<GoMarkGithub/>}
                    ></IconButton>

                    <IconButton
                    isRound={true}
                    size='lg'
                    aria-label="change theme"
                    variant="ghost"
                    colorScheme={useColorModeValue('gray', 'gray')}
                    icon={<AiFillLinkedin/>}
                    ></IconButton>


                    <IconButton
                    isRound={true}
                    size='lg'
                    aria-label="change theme"
                    variant="ghost"
                    colorScheme={useColorModeValue('gray', 'gray')}
                    icon={<EmailIcon/>}
                    ></IconButton>                  
                </Box>
            </Flex>
        </Box>
    )
    
}

