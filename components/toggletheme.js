import { AnimatePresence, motion } from 'framer-motion'
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

export default function ToggleTheme() {
  const { colorMode, toggleColorMode} = useColorMode()

  return (
        <IconButton
          isRound={true}
          size='md'
          aria-label="change theme"
          variant="ghost"
          colorScheme={useColorModeValue('cyan','green')}
          icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
          onClick={toggleColorMode}
        ></IconButton>
  )
}