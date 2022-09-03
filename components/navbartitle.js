import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const NavBox = styled.span`
  font-weight: bold;
  font-size: 20px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;
`

const NavBarTitle = () => {
  return (
    <Link href="/#intro" scroll={false}>
      <a>
        <NavBox>
          <Text
            color={useColorModeValue('#272343', '#fffffe')}
            fontFamily='M PLUS Rounded 1c", sans-serif'
            fontWeight="bold"
            ml={3}
          >
            {"MikeCanCode"}
          </Text>
        </NavBox>
      </a>
    </Link>
  )
}

export default NavBarTitle