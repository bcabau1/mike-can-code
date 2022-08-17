import NextLink from 'next/link'
import { Box, Heading, Text, Container, Divider, Button, Flex } from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/react'

export default function NotFound() {
  return (
    <Container h='100%' maxW='100%'>
      <Flex position='relative' w = '100%' h='100%' align='center'>
          <Heading w='100%' position='relative' as="h1" align="center">404, page nowhere to be seen...</Heading><br/>
          <NextLink href="/" passHref position='relative'>
            <Button bg={useColorModeValue('#2d333a', '#c2bfdf')}>
              <Text ml="8px" mr="8px" textAlign='justify' fontSize='md' fontFamily={'snippit'} color={useColorModeValue('#94a1c2','#232946')}>
                //return home
              </Text>
              </Button>
          </NextLink>
        </Flex>
    </Container>
  )
}
