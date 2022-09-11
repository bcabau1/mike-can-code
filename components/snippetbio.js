import { Box, Text, useColorModeValue } from '@chakra-ui/react'


export default function SnippetBio({children})    {

    return (
            <Box minH="10px" borderRadius={'sm'} mr='0' mb={10} mt={10} >
                <Text  ml="0px" mr="0px" textAlign='center' fontSize='calc(12px + .5vw)' fontFamily={'snippit'} color={useColorModeValue('#2d333a','#fffffe')}>
                    {children}
                </Text>
            </Box>
        
    )
}

/*
*
*
*
*/