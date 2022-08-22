import { Box, Container } from "@chakra-ui/layout"
import Card from "./card"


export const TimelineElement = ({children}) =>  {

    return (
        <Card>
            <Box display='flex'>
                { children }
            </Box> 
        </Card>       
    )
}

export default function Timeline()  {
    return (
        <Container>
            <TimelineElement></TimelineElement>
        </Container>
    )
}