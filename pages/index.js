import { Container, Box, Heading } from "@chakra-ui/react"
import Card from "../components/card"
import SnippetBio from "../components/snippetbio"

export default function Page() {
    return (
    <Container maxW="80ch">
        <Box display={{md:'flex'}} mt={8}>
            <Box flexGrow={1}>
                <Heading as="h2" variant="page-title">
                    Michael Cabau
                </Heading>
                <p>Software engineer, math buff, and automotive enthusiest</p>
            </Box>
        </Box>
        <Card>
            <SnippetBio>
                /* Hello, I'm Mike! <br/>
                I am a software engineer working remotely in the United States.
                Transportation and the automotive industry are subjects I am passionate about, and these interests motivate
                my personal projects.<br/>
                */
            </SnippetBio>
        </Card>
        
    </Container>
    )
}
