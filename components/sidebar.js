import {Box, Flex} from "@chakra-ui/layout"
import Scene from "./scene"


export default function Sidebar()   {

    return (
        <Box position='fixed' transform={'translateX(0)'} h='100%' w='25%' >
            <Flex position='relative' w = '100%' h='100%' align='center'>
                <Scene/>
            </Flex>
        </Box>
    )
    
}

