import { Box, Text, useColorModeValue } from '@chakra-ui/react'
import Card from './card'


export default function SnippetBio({children})    {

    return (
        <Card>
            <Box minH="10px" borderRadius={'sm'} mr='0' mb='50px' >
                <Text ml="0px" mr="0px" textAlign='center' fontSize='calc(14px + .5vw)' fontFamily={'snippit'} color={useColorModeValue('#2d333a','#fffffe')}>
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