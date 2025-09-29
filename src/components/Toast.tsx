'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface ToastProps {
  message: string
  open: boolean
  onClose: () => void
  duration?: number
}

export default function Toast({ message, open, onClose, duration = 7000 }: ToastProps) {
  const [render, setRender] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (open) {
      setRender(true)
      setVisible(true)

      const timer = setTimeout(() => {
        setVisible(false)
      }, duration)

      return () => clearTimeout(timer)
    }
  }, [open, duration])

  return (
    <AnimatePresence>
      {render && (
        <motion.div
          key={message} 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 50 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ opacity: { duration: 0.2 }, y: { duration: 0.2 } }}
          onAnimationComplete={() => {
            if (!visible) {
              setRender(false)
              onClose()
            }
          }}
          onClick={() => setVisible(false)}
          className="fixed bottom-6 right-6 z-50 cursor-pointer bg-[var(--card)] text-[var(--text)] border border-[var(--accent)] rounded-lg shadow-lg p-4 max-w-xs select-none"
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
