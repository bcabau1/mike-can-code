import NextLink from 'next/link'
import { Box, Heading, Text, Container, Divider, Button, Flex } from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/react'
import ButtonBar from '../components/buttonbar'

export default function NotFound() {
  return (
    <Container position='relative' h='100%' maxW='100%'>
      <Flex position='relative' w = '100%' h='100vh' align='center'>
        <Box position='relative' w='100% ' align="center">
          <Heading w='100%' position='relative' as="h1" >404, page nowhere to be seen...</Heading>
            <NextLink href="/" passHref position='relative'>
              applesauce
            </NextLink>
        </Box>
        </Flex>
    </Container>
  )
}
