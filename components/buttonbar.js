import {NextLink} from 'next/link'
import { Box, Text, Stack, Button, Link } from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/react'
import { LinkItem } from './navbar'

export default function ButtonBar() {

    return (
        <Box w='100%' display='flex' mt='40px'>
            <Stack direction={{ base: 'column', md: 'row' }} display={{ base: 'none', md: 'flex' }} width={{ base: 'full', md: 'auto' }} alignItems="center" flexGrow={1} mt={{ base: 4, md: 0 }}>
                <Link as='NextLink' to="/">
                        <Text w='50vh' mr="8px" textAlign='left' fontSize='lg' fontFamily={'heading'} color={useColorModeValue('#94a1c2','#b8c1ec')}>
                            Learn more about me.
                        </Text>
                </Link>
            </Stack>
        </Box>
    )
}