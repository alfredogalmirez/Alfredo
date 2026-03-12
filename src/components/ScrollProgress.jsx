import React from 'react'
import { motion, useScroll } from 'motion/react'

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll()
  return (
    <>
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 4,
          originX: 0,
          backgroundColor: "#a855f7",
          zIndex: 100, // Ensure it stays above everything
        }}
      >
      </motion.div>
    </>
  )
}

export default ScrollProgress