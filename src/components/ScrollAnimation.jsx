import React from 'react'
import { motion } from 'framer-motion'

const ScrollAnimation = ({ children }) => {

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}>
      {children}
    </motion.div >
  )
}

export default ScrollAnimation