'use client'

import { useState } from 'react'
import Image from 'next/image'

interface FilePreviewProps {
  file: File | null
}

export default function FilePreview({ file }: FilePreviewProps) {
  const [zoom, setZoom] = useState(false)

  if (!file) return null

  const isImage = file.type.startsWith('image/')
  const objectUrl = URL.createObjectURL(file)

  return (
    <div className="mt-4">
      {isImage ? (
        <>
          <div className="max-w-full max-h-48 rounded-xl shadow-md cursor-pointer overflow-hidden">
            <Image
              src={objectUrl}
              alt={file.name}
              width={1920}
              height={1080}
              unoptimized
              className="object-contain transition-transform duration-200 hover:scale-105"
              onClick={() => setZoom(true)}
            />
          </div>

          {zoom && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
              onClick={() => setZoom(false)}
            >
              <div className="max-w-3xl max-h-[80vh] relative">
                <Image
                  src={objectUrl}
                  alt={file.name}
                  width={1920}
                  height={1080}
                  unoptimized
                  className="object-contain rounded-xl shadow-lg"
                />
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="flex items-center gap-2 p-3 bg-[var(--glass)] rounded-xl border border-gray-400">
          <span className="font-medium text-text">{file.name}</span>
        </div>
      )}
    </div>
  )
}
