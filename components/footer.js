import { Box, Center, Text, useColorModeValue } from "@chakra-ui/react"

export default function AttributeFooter()    {

    return (
        <Box position='relative' bottom='0' pb='3' w='100%'>
            <Center>
                <a href="https://www.flaticon.com/free-icons/college" title="college icons">
                    <Text fontSize='calc(11px)' color={useColorModeValue('gray','#484848')}>Icons created by IwitoStudio - Flaticon</Text>
                </a>
            </Center> 
        </Box>
    )
}

    