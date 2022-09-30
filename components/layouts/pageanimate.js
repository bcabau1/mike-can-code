import { AnimatePresence, motion } from 'framer-motion'
import Head from 'next/head'
import { Container } from '@chakra-ui/react'
import { StyledDiv } from '../card'


export default function PageAnimate({children, title}) {

    const nameTitle = `Michael Cabau - ${title}`
  
    const variants = {
        hidden: { opacity: 0, x: 0, y: 20 },
        enter: { opacity: 1, x: 0, y: 0, transition:{ duration: .5, type: 'easeinOut' } },
        exit: { opacity: 0, x: 0, y: 20}
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
      <>
        {title && (
          <Head>
            <title>{nameTitle}</title>
            <meta property="og:title" content={nameTitle} />
          </Head>
        )}
      </>
      {children}
    </Container>
    </AnimatePresence>
    
  )
}
