import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    html: {
      scrollBehavior: 'smooth'
    },
    body: {
      bg: mode('#eff0f3', '#16161a')(props),
    },
    p:{
      color: mode('#2d334a', 'white')(props)
    }
  })
}

const components = {
  Heading: {
    baseStyle: props => ({
        color: mode('#272343', '#fffffe')(props)
      }),
    variants: {
      'section-title': {
        fontSize: 'calc(48px + 5vw)',
      },
      'sub-title': props => ({
        fontSize: 'calc(14px + 1vw)',
        color: mode('#2d334a', '#94a1b2')(props)
      }),
      'banner-title': props => ({
        fontSize: 'calc(18px + 1vw)',
        color: mode('#272343', '#fffffe')(props)
      })
    }
  },
  Link: {
    baseStyle: props => ({
      color: mode('#3d7aed', '#ff63c3')(props),
      textUnderlineOffset: 5,
    })
  }
}

const fonts = {
  heading: "'Asap', sans-serif",
  snippit: "'Figtree', sans-serif"
}

const colors = {
  grassTeal: '#88ccca'
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}

const theme = extendTheme({ config, styles, components, fonts, colors })
export default theme