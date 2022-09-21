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
      color: mode('#2a2a2a', 'white')(props)
    }
  })
}

const components = {
  Heading: {
    baseStyle: props => ({
        color: mode('#0d0d0d', '#fffffe')(props)
      }),
    variants: {
      'section-title': {
        fontSize: 'calc(24px + 6.5vw)',
      },
      'sub-title': props => ({
        fontSize: 'calc(18px + 1vw)',
        color: mode('#2a2a2a', '#94a1b2')(props)
      }),
      'banner-title': props => ({
        fontSize: 'calc(18px + 1vw)',
        color: mode('#0d0d0d', '#fffffe')(props)
      }),
      'tab-title': props => ({
        fontSize: 'calc(52px + 1vw)',
        color: mode('#0d0d0d', '#fffffe')(props)
      }),
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