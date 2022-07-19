import { Box, Text, useColorModeValue } from '@chakra-ui/react'


export default function SnippetBio({children})    {

    return (
        <Box minH="10px" borderRadius={'lg'} bg={useColorModeValue('#2d333a', '#c2bfdf')}>
            <Text ml="8px" mr="8px" textAlign='justify' fontSize='md' fontFamily={'snippit'} color={useColorModeValue('#94a1c2','#232946')}>
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