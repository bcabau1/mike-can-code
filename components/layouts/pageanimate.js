import { AnimatePresence, motion } from 'framer-motion'
import { Container } from '@chakra-ui/react'
import { StyledDiv } from '../card'


export default function PageAnimate({children}) {

    
    const variants = {
        hidden: { opacity: 0, x: 0, y: 30 },
        enter: { opacity: 1, x: 0, y: 0, transition:{ duration: .5, type: 'easeinOut' } },
        exit: { opacity: 0, x: 0, y: 30}
      }
    
    return (
    <AnimatePresence>
      <Container as={StyledDiv}
      position='relative'
      maxW='100%'
      h='100%'
      initial='hidden'
      animate='enter'
      exit='exit'
      variants={variants}
      transition='transition'
    >
      {children}
    </Container>
    </AnimatePresence>
    
  )
}
