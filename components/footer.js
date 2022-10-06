import { Box, Center, Text, useColorModeValue } from "@chakra-ui/react"

export default function AttributeFooter({children})    {

    return (
        <Box position='relative' bottom='0' pb='2' w='100%'>
            <Center>
                <a href="https://www.flaticon.com/free-icons/college" title="college icons">
                    <Text fontSize='calc(4px + .5vw)' color={useColorModeValue('gray','#484848')}>{children}</Text>
                </a>
            </Center> 
        </Box>
    )
}

    