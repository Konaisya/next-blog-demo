'use client'

import { ReactNode, MouseEventHandler } from 'react'
import { motion } from 'framer-motion'

interface AnimatedGridProps {
  children: ReactNode
  className?: string
}

export default function AnimatedGrid({ children, className }: AnimatedGridProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

interface AnimatedCardProps {
  children: ReactNode
  onClick?: MouseEventHandler<HTMLDivElement>
}

export const AnimatedCard = ({ children, onClick }: AnimatedCardProps) => (
  <motion.div
    className="card bg-card cursor-pointer hover:scale-105 transform transition-all duration-200"
    variants={{
      hidden: { opacity: 0, y: 10 },
      visible: { opacity: 1, y: 0 },
    }}
    onClick={onClick} 
  >
    {children}
  </motion.div>
)
