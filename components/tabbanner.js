import { Box, useColorModeValue, Image, Center, Text } from "@chakra-ui/react"
import { motion } from 'framer-motion'
import { LinkItem } from "./navbar";


export default function TabBanner(props) {

  const {path, href, name, imgsrc} = props

  /*  const clickHandle = () => {
        window.location.href = props.href;
      }
  */

//    const shadow = useColorModeValue('lg', 'dark-lg')


    function template({ scale }) {
      return `scale(${scale})`
    }

    return (
      <LinkItem href={href} path={path}>
            <Box as={motion.div}
            transformTemplate={template}
            w='calc(100px + 6vw)' 
            h='calc(100px + 6vw)' 
            borderRadius='xl' 
            bg={useColorModeValue('#fffffe', '#242629')}  
            whileHover={{ scale: 1.15}}
            whileTap={{scale: 0.8}}
            //transition='0.05s linear'
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            initial={{ y: 5, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            //onClick={clickHandle}
            pt='5%'
            boxShadow={useColorModeValue('lg', 'dark-lg')}
            >
              <Center><Image src={imgsrc} boxSize='calc(75px + 5vw)' alt='no image'></Image></Center>
              <Center><Text fontFamily='snippit' fontSize='calc(8px + .5vw)'>{name}</Text></Center>
            </Box>
      </LinkItem>
    )
}