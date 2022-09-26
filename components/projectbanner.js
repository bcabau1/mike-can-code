import { Box, Flex, useColorModeValue, Text } from "@chakra-ui/react"


export default function ProjectBanner(props) {
    return (            
            <Flex m='4' w='800px' minH='200px'  justify='center' textAlign='left'>
                <Flex position='relative' w='88%' p='2'  align='center' justify='left' fontFamily='snippit' fontSize='calc(14px + .25vw)'>{props.summary}</Flex>
                <Flex position='relative' justify='center' align='center' w='12%' >
                    <Box position='relative' h='90%' w='75%' borderRadius='full' bg= {useColorModeValue('#fffffe', '#242629')}></Box>
                </Flex>
            </Flex>   
    )
}