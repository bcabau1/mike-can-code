import { Box, useColorModeValue, Image, Center, Text } from "@chakra-ui/react"
import { motion } from 'framer-motion'
import { LinkItem } from "./navbar";


export default function TabBanner(props) {

  const {path, href, name, imgsrc} = props

  /*  const clickHandle = () => {
        window.location.href = props.href;
      }
  */

    return (
      <LinkItem href={href} path={path}>
            <Box as={motion.div}
            position='relative' 
            w='calc(100px + 6vw)' 
            h='calc(100px + 6vw)' 
            borderRadius='xl' 
            bg={useColorModeValue('#fffffe', '#242629')}  
            whileHover={{ scale: 1.05 }}
            transition='0.1s linear'
            initial={{ y: 5, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            //onClick={clickHandle}
            pt='8px'
            >
              <Center>
              <Image src={imgsrc} boxSize='calc(70px + 5vw)'></Image>
              </Center>
              <Center><Text fontFamily='snippit' fontSize='calc(9px + .5vw)'>{name}</Text></Center>

            </Box>
      </LinkItem>
    )
}