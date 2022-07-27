import {NextLink} from 'next/link'
import { Box, Text, Stack, Button } from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/react'
import { LinkItem } from './navbar'

export default function ButtonBar(props) {
    const { path } = props

    return (
        <Box w='100%' display='flex'>
            <Stack direction={{ base: 'column', md: 'row' }} display={{ base: 'none', md: 'flex' }} width={{ base: 'full', md: 'auto' }} alignItems="center" flexGrow={1} mt={{ base: 4, md: 0 }}>
                
                <LinkItem href="/" path={path}>
                    <Button bg={useColorModeValue('#2d333a', '#c2bfdf')}>
                        <Text ml="8px" mr="8px" textAlign='justify' fontSize='md' fontFamily={'heading'} color={useColorModeValue('#94a1c2','#232946')}>
                        Experience
                        </Text>
                    </Button>
                </LinkItem>  
                <LinkItem href="/" path={path}>
                    <Button bg={useColorModeValue('#2d333a', '#c2bfdf')}>
                        <Text ml="8px" mr="8px" textAlign='justify' fontSize='md' fontFamily={'heading'} color={useColorModeValue('#94a1c2','#232946')}>
                        Projects
                        </Text>
                    </Button>
                </LinkItem>  
            </Stack>
        </Box>
    )
}