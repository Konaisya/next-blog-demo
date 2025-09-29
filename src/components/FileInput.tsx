'use client'

import { useRef, useState, DragEvent } from 'react'

interface FileInputProps {
  file: File | null
  setFile: (file: File | null) => void
  error?: boolean
}

export default function FileInput({ file, setFile, error }: FileInputProps) {
  const [dragActive, setDragActive] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleFiles = (files: FileList | null) => {
    if (!files) return
    setFile(files[0])
  }

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setDragActive(true)
  }

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setDragActive(false)
  }

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setDragActive(false)
    handleFiles(e.dataTransfer.files)
  }

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={() => inputRef.current?.click()}
      className={`
        p-4 border-2 rounded-xl cursor-pointer text-center
        ${error ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'}
        ${dragActive ? 'border-dashed border-[var(--accent)] bg-[var(--glass)]' : ''}
        transition-all duration-200
      `}
    >
      {file ? (
        <p className="text-text">{file.name}</p>
      ) : (
        <p className="text-muted">Перетащите файл сюда или кликните для выбора</p>
      )}
      <input
        ref={inputRef}
        type="file"
        className="hidden"
        onChange={(e) => handleFiles(e.target.files)}
      />
    </div>
  )
}
