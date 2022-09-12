import { motion } from 'framer-motion'
import { chakra, shouldForwardProp } from '@chakra-ui/react'

export const StyledDiv = chakra(motion.div, {
  shouldForwardProp: prop => {
    return shouldForwardProp(prop) || prop === 'transition'
  }
})

export default function Card({ children, delay = 0 }) { 
    return (
        <StyledDiv
            initial={{ y: 5, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay }}
            mb={6}
            mt={10}
        >
            {children}
        </StyledDiv>
    )
}
