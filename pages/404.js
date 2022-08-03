import NextLink from 'next/link'
import { Box, Heading, Text, Container, Divider, Button } from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/react'

export default function NotFound() {
  return (
    <Container my="30vh" maxW='container.xl'>
      <Heading as="h1" align="center">404, page nowhere to be seen...</Heading>
      <Box my={6} align="center">
        <NextLink href="/" passHref>
          <Button bg={useColorModeValue('#2d333a', '#c2bfdf')}>
            <Text ml="8px" mr="8px" textAlign='justify' fontSize='md' fontFamily={'snippit'} color={useColorModeValue('#94a1c2','#232946')}>
              //return home
            </Text>
            </Button>
        </NextLink>
      </Box>
    </Container>
  )
}
