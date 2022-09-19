import { Box, Flex, useColorModeValue, Text } from "@chakra-ui/react"


export default function ProjectBanner(props) {
    return (
        <>
            <Flex
            key={props.id}
            w='600px' 
            h='200px' 
            m='4'  
            justify='center'
            align='center'
            borderRadius='lg' 
            bg={useColorModeValue('#fffffe', '#242629')} 
            boxShadow={useColorModeValue('lg', 'dark-lg')} 
            >
                <Flex position='relative' w='15%' h='100%' border='1px solid white'>

                </Flex>
                <Flex position='relative' w='85%' h='100%' border='1px solid white'>
                    <Flex position='relative' w='100%' h='20%' marginBottom='auto' marginTop='auto' border='1px solid white'>

                    </Flex>
                    <Flex position='relative' w='100%' h='15%' border='1px solid white'>

                    </Flex>
                </Flex>
            
            </Flex>
        </>
    )
}