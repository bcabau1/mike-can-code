import { Box,  IconButton, Icon } from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/react'
import { BsChevronCompactDown } from "react-icons/bs";

export default function ButtonBar() {

    return (
        <Box w='100%' mt='25px' position='relative' >

             <IconButton display='block' margin='auto'
                    size='lg'
                    isRound={true}
                    aria-label="change theme"
                    variant="ghost"
                    colorScheme={useColorModeValue('gray', 'gray')}
                    icon={<Icon as={BsChevronCompactDown} h='45px' w='100px'/>}
                    ></IconButton>
        </Box>
    )
}