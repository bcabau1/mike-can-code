import { motion } from 'framer-motion'
import React from 'react'


const PageAnimate = ({ children }) => {
  return (
    <motion.article
      initial={{ opacity: 0, x: 0, y: 30 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      exit={{ opacity: 0, x: -0, y: 30 }}
      transition={{ duration: .75, type: 'easeinOut' }}
    >
      <React.Fragment>{children}</React.Fragment>
    </motion.article>
  )
}

export default PageAnimate