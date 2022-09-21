import { Box, Text, useColorModeValue, Image, Center } from '@chakra-ui/react'
import ButtonBar from './buttonbar'


export default function SnippetBio({children})    {

    const color = `3px solid ${useColorModeValue('lightgrey','#fffffe')}`

    return (
        <>
        <Box minH="10px" m='6' w='100%'  >
                <Center><Image src='/images/profilepic.jpg' borderRadius='full' boxSize='calc(120px + 3.5vw)' mb='5' border={color}/></Center>
                <Text noOfLines={6} textAlign='center' fontSize='calc(16px + .25vw)' fontFamily={'snippit'} color={useColorModeValue('#2d333a','#fffffe')}>
                    {children}
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