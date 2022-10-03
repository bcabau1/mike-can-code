import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

export default function ToggleTheme() {
  const { toggleColorMode} = useColorMode()

  return (
        <IconButton
          //isRound={true}
          size='md'
          aria-label="change theme"
          variant="ghost"
          colorScheme={useColorModeValue('blackAlpha','yellow')}
          icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
          onClick={toggleColorMode}
        ></IconButton>
  )
}