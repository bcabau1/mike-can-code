import { Container, Box, Heading } from "@chakra-ui/react"

export default function Page() {
    return (
    <Container>
        <Box borderRadius="lg" align="center" bg="gray" p={3} mb={6}>
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
    </Container>
    )
}
