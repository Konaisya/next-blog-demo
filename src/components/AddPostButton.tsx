'use client'

import { useState, useRef } from 'react'
import Modal from './ui/Modal'
import PostForm, { PostFormRef } from './PostForm'
import Button from './ui/Button'
import { motion } from 'framer-motion'

export default function AddPostButton() {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [isFormValid, setIsFormValid] = useState(false)
  const formRef = useRef<PostFormRef>(null)

  const handleSend = async () => {
    if (!formRef.current) return
    if (!isFormValid) return

    setLoading(true)
    try {
      const success = await formRef.current.submit()
      if (success) {
        setOpen(false)
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Button className='text-white' onClick={() => setOpen(true)}>
        Добавить пост
      </Button>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        footer={
          <>
            <Button
              className='bg-[var(--color-lime-400)] text-black relative flex items-center justify-center'
              onClick={handleSend}
              disabled={loading || !isFormValid}
            >
              {loading && (
                <motion.span
                  className="absolute left-3 w-5 h-5 border-2 border-t-black border-r-transparent border-b-transparent border-l-transparent rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                />
              )}
              {loading ?'' : 'Отправить'}
            </Button>
            <Button className="text-white" onClick={() => setOpen(false)}>Закрыть</Button>
          </>
        }
      >
        <PostForm ref={formRef} onValidityChange={setIsFormValid} />
      </Modal>
    </>
  )
}
