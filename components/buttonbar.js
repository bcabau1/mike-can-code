import { Box, Button, IconButton, Icon, Text, useColorModeValue } from '@chakra-ui/react'
import { BsChevronCompactDown } from "react-icons/bs";

export default function ButtonBar({children}) {

    return (
        <Box w='100%' mt='25px' position='relative' >
             <Button display='block' margin='auto' borderRadius='full' w='15em' bg={useColorModeValue('#ff8e3c', '#7f5af0')}>
                        <Text as='h3' fontSize='calc(10px + .5vw)'>{children}</Text>
                    </Button>
        </Box>
    )
}