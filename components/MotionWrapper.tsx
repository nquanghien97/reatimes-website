'use client'

import { HTMLMotionProps, motion } from 'motion/react'

function MotionWrapper({ children, attr }: { children: React.ReactNode, attr?: HTMLMotionProps<'div'> }) {

  return (
    <motion.div
      {...attr}
    >
      {children}
    </motion.div>
  )
}

export default MotionWrapper