import Link from 'next/link'
import { Text, useColorModeValue, Image } from '@chakra-ui/react'
import styled from '@emotion/styled'

const NavBox = styled.span`
  font-weight: bold;
  font-size: 22px;
  display: inline-flex;
  align-items: center;
  line-height: 36px;
  height: 8px;
  padding: 10px;
`

const NavBarTitle = () => {
  return (
    <Link href="/#intro" scroll={false}>
      <a>
        <NavBox>
        <>
        <Image boxSize='22px' mr='1' src={useColorModeValue('images/light-icon.png','images/dark-icon.png')} alt='no image' />
          <Text
            color={useColorModeValue('#272343', '#fffffe')}
            fontFamily='M PLUS Rounded 1c", sans-serif'
            fontWeight="bold"
            ml={3}
          >
            {"mikecancode"}
          </Text>
          </>
        </NavBox>
      </a>
    </Link>
  )
}

export default NavBarTitle