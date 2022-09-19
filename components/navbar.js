import NavBarTitle from './navbartitle'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
  Text, Icon
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ToggleTheme from './toggletheme'
import { EmailIcon } from '@chakra-ui/icons'
import { GoMarkGithub } from "react-icons/go";
import { AiFillLinkedin } from "react-icons/ai";

export const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('#2d334a', '#b8c1ec')
  return (
    <NextLink href={href} passHref scroll={false}>
      <Link
        p={2}
        bg={active ? 'grassTeal' : undefined}
        color={active ? '#202023' : inactiveColor}
        target={target}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  )
}

export default function Navbar(props) {
  const { path } = props

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#fffffe', '#242629')}
      //css={{ backdropFilter: 'blur(10px)' }}
      zIndex={99}
      boxShadow={'sm'}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.xl"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={10}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <NavBarTitle/>
          </Heading>
        </Flex>

        <Stack fontFamily='heading'
          direction={{ base: 'column', lg: 'row' }}
          display={{ base: 'none', lg: 'flex' }}
          width={{ base: 'full', lg: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="education/#intro" path={path}>
            <Text >Education</Text>
          </LinkItem>
          <LinkItem href="experience/#intro" path={path}>
            <Text>Experience</Text>
          </LinkItem>
          <LinkItem href="projects/#intro" path={path}>
            <Text >Projects</Text>
          </LinkItem>
        </Stack>

        <Box flex={1} align="right">
          <IconButton 
                      size='md'
                      //isRound={true}
                      aria-label="github"
                      variant="ghost"
                      colorScheme={useColorModeValue('gray', 'gray')}
                      icon={<Icon as={GoMarkGithub} h='20px' w='20px'/>}
                      onClick={() => document.location.href = 'https://github.com/bcabau1'}
          ></IconButton>
          <IconButton
                      size='md'
                      //isRound={true}
                      aria-label="linked-in"
                      variant="ghost"
                      colorScheme={useColorModeValue('gray', 'gray')}
                      icon={<Icon as={AiFillLinkedin} h='20px' w='20px'/>}
                      onClick={() => document.location.href = 'https://www.linkedin.com/in/brian-cabau-91525b197'}
          ></IconButton>
          <IconButton mr={6}
                      size='md'
                      //isRound={true}
                      aria-label="change theme"
                      variant="ghost"
                      colorScheme={useColorModeValue('gray', 'gray')}
                      icon={<Icon as={EmailIcon} h='20px' w='20px'/>}
                      onClick={() => window.open('mailto:bmcabaudev@gmail.com')}
          ></IconButton>
          <ToggleTheme />
          <Box ml={2} display={{ base: 'inline-block', lg: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                size='md'
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="ghost"
                aria-label="Options"
                //isRound={true}
              />
              <MenuList >
                <NextLink href="/" passHref>
                  <MenuItem as={Link}>About</MenuItem>
                </NextLink>
                <NextLink href="experience/#intro" passHref>
                  <MenuItem as={Link}>Experience</MenuItem>
                </NextLink>
                <NextLink href="education/#intro" passHref>
                  <MenuItem as={Link}>Education</MenuItem>
                </NextLink>
                <NextLink href="projects/#intro" passHref>
                  <MenuItem as={Link}>Projects</MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
