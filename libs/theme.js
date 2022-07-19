import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('#fffffe', '#232946')(props)
    },
    p:{
      color: mode('#2d334a', '#b8c1ec')(props)
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
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      }
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
  heading: "'M PLUS Rounded 1c'",
  snippit: "'Roboto Mono', monospace"
}

const colors = {
  grassTeal: '#88ccca'
}

const config = {
  initialColorMode: 'light',
  useSystemColorMode: true
}

const theme = extendTheme({ config, styles, components, fonts, colors })
export default theme