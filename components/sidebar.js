import {Box} from "@chakra-ui/layout"
import Scene from "./scene"


export default function Sidebar()   {

    return (
        <Box position='fixed' transform={'translateX(0)'} h='100vw' w='30%' outline='1px solid green'>
            <Scene/>
        </Box>
    )
    
}

