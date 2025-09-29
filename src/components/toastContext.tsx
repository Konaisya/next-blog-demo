'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import Toast from './Toast'

interface ToastContextProps {
  showToast: (message: string) => void
}

const ToastContext = createContext<ToastContextProps | undefined>(undefined)

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toast, setToast] = useState<{ message: string; open: boolean }>({ message: '', open: false })

  const showToast = (message: string) => {
    setToast({ message, open: true })
    setTimeout(() => setToast(prev => ({ ...prev, open: false })), 3000)
  }

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toast.open && <Toast open={toast.open} message={toast.message} onClose={() => setToast(prev => ({ ...prev, open: false }))} />}
    </ToastContext.Provider>
  )
}

export const useToast = () => {
  const ctx = useContext(ToastContext)
  if (!ctx) throw new Error('useToast must be used within ToastProvider')
  return ctx
}
