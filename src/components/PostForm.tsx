'use client'

import { useState, forwardRef, useImperativeHandle, useEffect, useCallback } from 'react'
import FileInput from './FileInput'
import FilePreview from './FilePreview'
import { useToast } from './toastContext'

export interface PostFormRef {
  submit: () => Promise<boolean>
}

interface PostFormProps {
  onSuccess?: () => void
  onValidityChange?: (valid: boolean) => void
}

const PostForm = forwardRef<PostFormRef, PostFormProps>(({ onSuccess, onValidityChange }, ref) => {
  const [title, setTitle] = useState('')
  const [file, setFile] = useState<File | null>(null)
  const [errors, setErrors] = useState<{ title?: boolean; file?: boolean }>({})
  const { showToast } = useToast()

  const isValid = Boolean(title.trim() && file)

  useEffect(() => {
    onValidityChange?.(isValid)
  }, [isValid, onValidityChange])

  const handleSubmit = useCallback(async (): Promise<boolean> => {
    const newErrors: { title?: boolean; file?: boolean } = {}
    if (!title.trim()) newErrors.title = true
    if (!file) newErrors.file = true
    setErrors(newErrors)

    if (Object.keys(newErrors).length > 0) {
      return false
    }


    const formData = new FormData()
    formData.append('title', title)
    if (file) formData.append('file', file)

    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: formData,
      })
      if (!res.ok) throw new Error('Ошибка при отправке')

      setTitle('')
      setFile(null)
      setErrors({})
      showToast('Ваш пост отправлен на проверку!')
      onSuccess?.()
      return true
    } catch (err) {
      console.error(err)
      showToast?.('Ошибка при отправке (попробуйте позже)')
      return false
    } 
  }, [title, file, onSuccess, showToast])

  useImperativeHandle(ref, () => ({ submit: handleSubmit }), [handleSubmit])

  return (
    <div className="flex flex-col gap-4">
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Заголовок"
        className={`p-3 rounded-xl border bg-[var(--card)] text-text focus:outline-none focus:ring-2 focus:ring-[var(--accent)]
          ${errors.title ? 'border-red-500 focus:ring-red-400' : 'border-gray-300 dark:border-gray-700'}
        `}
      />

      <FileInput file={file} setFile={setFile} error={errors.file} />

      {file && (
        <div className="mt-2">
          <FilePreview file={file} />
        </div>
      )}

      {Object.keys(errors).length > 0 && (
        <p className="text-red-500 text-sm">
          Пожалуйста, заполните все обязательные поля.
        </p>
      )}
    </div>
  )
})

PostForm.displayName = 'PostForm'
export default PostForm
