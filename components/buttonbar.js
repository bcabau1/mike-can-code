import { Box, Button, IconButton, Icon, Text, useColorModeValue } from '@chakra-ui/react'
import { BsChevronCompactDown } from "react-icons/bs";
import NextLink from 'next/link'

export default function ButtonBar({children}) {

    return (
        <Box w='100%' mt='3vh' position='relative' >
            <NextLink href='#banners'>
                <Button display='block' margin='auto' borderRadius='full' w='calc(25% + 100px)' bg={useColorModeValue('#ff8e3c', '#7f5af0')} fontFamily='heading'>
                            <Text as='h3' fontSize='calc(10px + .5vw)'>{children}</Text>
                </Button>
            </NextLink>
        </Box>
    )
}