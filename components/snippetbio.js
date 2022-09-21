import { Box, Text, useColorModeValue, Image, Center } from '@chakra-ui/react'
import ButtonBar from './buttonbar'


export default function SnippetBio({children})    {

    return (
        <>
        <Box minH="10px" ml={12} my='6' w='100%' >
                <Center><Image src='/images/profilepic.jpg' borderRadius='full' boxSize='calc(85px + 7.5vw)' mb='5' border='3px solid white'/></Center>
                <Text noOfLines={8} textAlign='center' fontSize='calc(10px + .5vw)' fontFamily={'snippit'} color={useColorModeValue('#2d333a','#fffffe')}>
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