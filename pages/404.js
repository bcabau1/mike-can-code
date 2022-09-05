import NextLink from 'next/link'
import { Box, Heading, Text, Container, Divider, Button, Flex } from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/react'
import ButtonBar from '../components/buttonbar'

export default function NotFound() {
  return (
    <Container position='relative' h='100%' maxW='100%'>
      <Flex position='relative' w = '100%' h='100vh' align='center'>
        <Box position='relative' w='100% ' align="center">
          <Heading w='100%' position='relative' as="h1" variant='banner-title' my='30px'>404, page nowhere to be seen...</Heading>
            <NextLink href='/'>
                <Button display='block' margin='auto' borderRadius='full' w='calc(12% + 100px)' bg={useColorModeValue('#ff8e3c', '#7f5af0')} fontFamily='heading'>
                            <Text as='h3' fontSize='calc(10px + .5vw)'> Return home. </Text>
                </Button>
            </NextLink>
        </Box>
        </Flex>
    </Container>
  )
}
