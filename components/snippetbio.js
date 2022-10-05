import { Box, Text, useColorModeValue, Image, Center } from '@chakra-ui/react'
import ButtonBar from './buttonbar'


export default function SnippetBio()    {

    const color = `3px solid ${useColorModeValue('lightgrey','#fffffe')}`

    const summary = `Hello, I'm Mike!
    I am a software engineer working remotely in Atlanta, Georgia.
    My personal projects are motivated by topics I stumble upon, which
    provide me with a new engineering challenge and a way to express myself creatively.`

    return (
        <>
        <Box minH="10px" m='6' w='100%'  >
                <Center><Image src='images/profilepic.jpg' borderRadius='full' boxSize='calc(130px + 2.5vw)' mb='5' border={color} alt='no image'/></Center>
                <Text noOfLines={6} textAlign='center' fontSize='18px' fontFamily={'snippit'} color={useColorModeValue('#2d333a','#fffffe')}>
                    {summary}
                </Text>
                <ButtonBar>Learn more about me.</ButtonBar>
            </Box>
            
        </>
            
        
    )
}

/*
*
*
*
*/