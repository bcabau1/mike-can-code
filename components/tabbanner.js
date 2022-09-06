import { Box, Flex, useColorModeValue } from "@chakra-ui/react"
import { motion } from 'framer-motion'


export default function TabBanner(props) {

    const clickHandle = () => {
        window.location.href = props.href;
      }

    return (
            <Box as={motion.div}
            position='relative' 
            w='calc(125px + 6vw)' 
            h='calc(125px + 6vw)' 
            borderRadius='lg' 
            bg={useColorModeValue('#fffffe', '#242629')}  
            whileHover={{ scale: 1.1 }}
            transition='0.1s linear'
            initial={{ y: 5, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            onClick={clickHandle}
            >

            </Box>
    )
}