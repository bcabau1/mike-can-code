import { Box, Button, Text, useColorModeValue } from '@chakra-ui/react'
//import { BsChevronCompactDown } from "react-icons/bs";
import NextLink from 'next/link'
import { motion } from 'framer-motion'


export default function ButtonBar({children}) {

    //const shadow = useColorModeValue('lg', 'dark-lg')


    return (
        <Box as={motion.div} w='100%' mt='6' position='relative' 
        whileHover={{ scale: 1.05}}
        whileTap={{scale: 0.9}}
        //transition='0.05s linear'
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        initial={{ y: 5, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        >
            <NextLink href='#banners'>
                <Button display='block' margin='auto' borderRadius='full' w='calc(11vw + 80px)' bg={useColorModeValue('#8bd3dd', '#2cb67d')} fontFamily='heading' >
                            <Text as='h3' fontSize='calc(10px + .5vw)'>{children}</Text>
                </Button>
            </NextLink>
        </Box>
    )
}