import { Container, Box, Heading } from "@chakra-ui/react"
import Card from "../components/card"

export default function Page() {
    return (
    <Container maxW="90ch">
        <Box borderRadius="lg" align="center" bg='#bae8e8' p={3} mb={6}>
            Hello there, I am a Software Engineer! 
        </Box>
        <Box display={{md:'flex'}}>
            <Box flexGrow={1}>
                <Heading as="h2" variant="page-title">
                    Michael Cabau
                </Heading>
                <p>Software engineer, math buff, and automotive enthusiest</p>
            </Box>
        </Box>
        <Card>
            <Heading as="h4" variant="section-title">
                About me
            </Heading>
            <p>
                
            </p>
        </Card>
        
    </Container>
    )
}
