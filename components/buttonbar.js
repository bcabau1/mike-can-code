import { Box, Button, IconButton, Icon, Text, useColorModeValue } from '@chakra-ui/react'
import { BsChevronCompactDown } from "react-icons/bs";
import NextLink from 'next/link'

export default function ButtonBar({children}) {

    //const shadow = useColorModeValue('lg', 'dark-lg')


    return (
        <Box w='100%' mt='6' position='relative' >
            <NextLink href='#banners'>
                <Button display='block' margin='auto' borderRadius='full' w='calc(35% + 75px)' bg={useColorModeValue('#8bd3dd', '#2cb67d')} fontFamily='heading' boxShadow={useColorModeValue('lg', 'dark-lg')}>
                            <Text as='h3' fontSize='calc(8px + .5vw)' >{children}</Text>
                </Button>
            </NextLink>
        </Box>
    )
}