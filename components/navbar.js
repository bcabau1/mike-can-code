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
  Text
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ToggleTheme from './toggletheme'

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
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.2xl"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={8}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <NavBarTitle/>
          </Heading>
        </Flex>

        <Stack fontFamily='heading'
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/experience" path={path}>
            <Text>Experience</Text>
          </LinkItem>
          <LinkItem href="/education" path={path}>
            <Text >Education</Text>
          </LinkItem>
          <LinkItem href="/projects" path={path}>
            <Text >Projects</Text>
          </LinkItem>
        </Stack>

        <Box flex={1} align="right">
        <ToggleTheme />
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="ghost"
                aria-label="Options"
              />
              <MenuList >
                <NextLink href="/" passHref>
                  <MenuItem as={Link}>About</MenuItem>
                </NextLink>
                <NextLink href="/experience" passHref>
                  <MenuItem as={Link}>Experience</MenuItem>
                </NextLink>
                <NextLink href="/education" passHref>
                  <MenuItem as={Link}>Education</MenuItem>
                </NextLink>
                <NextLink href="/projects" passHref>
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
