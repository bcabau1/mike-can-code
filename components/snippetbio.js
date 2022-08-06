import { Box, Text, useColorModeValue } from '@chakra-ui/react'
import Card from './card'


export default function SnippetBio({children})    {

    return (
        <Card>
            <Box minH="10px" borderRadius={'sm'} mr='1vh' >
                <Text ml="8px" mr="8px" textAlign='justify' fontSize='calc(12px + .5vw)' fontFamily={'snippit'} color={useColorModeValue('#2d333a','#fffffe')}>
                    {children}
                </Text>
            </Box>
        </Card>
        
    )
}

/*
*
*
*
*/