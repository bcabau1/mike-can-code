import { Box, Flex, useColorModeValue, Text } from "@chakra-ui/react"


export default function ProjectBanner(props) {
    return (
        <>
            <Flex
            w='600px' 
            h='150px' 
            m='4'  
            justify='center'
            align='center'
            borderRadius='lg' 
            bg={useColorModeValue('#fffffe', '#242629')} 
            >
                <Flex position='relative' w='10%' h='100%' >
                    
                </Flex>
                <Flex position='relative' w='90%' h='100%' >
                    <Flex position='relative' w='100%' h='20%'  >
                        {props.summary}
                    </Flex>
                    
                </Flex>
            
            </Flex>
        </>
    )
}