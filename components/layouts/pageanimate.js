import { motion } from 'framer-motion'
import { Container } from '@chakra-ui/react'
import { StyledDiv } from '../card'


export default function PageAnimate({children}) {

    
    const variants = {
        hidden: { opacity: 0, x: 0, y: 20 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: -0, y: 20 },
      }
    
    return (
    <Container as={StyledDiv}
      position='relative'
      maxW='100%'
      h='100%'
      initial='hidden'
      animate='enter'
      exit='exit'
      variants={variants}
      transition= {{ duration: .75, type: 'easeinOut' }}
    >
      {children}
    </Container>
  )
}
