'use client'

import { useState } from 'react'
import AnimatedGrid, { AnimatedCard } from './AnimatedGrid'
import Modal from './ui/Modal'
import Button from './ui/Button'

const technologies = [
  { name: 'Next.js 15', description: 'Фреймворк с поддержкой SSR, SSG и App Router.' },
  { name: 'TypeScript', description: 'Статическая типизация для JS.' },
  { name: 'TailwindCSS', description: 'Утилитарный CSS-фреймворк.' },
  { name: 'framer-motion', description: 'Библиотека для анимаций.' },
  { name: 'next-themes', description: 'Менеджер тем для Next.js.' },
]

export default function AnimatedTechnologies() {
  const [open, setOpen] = useState(false)
  const [activeTech, setActiveTech] = useState<{ name: string; description: string } | null>(null)

  const handleClick = (tech: { name: string; description: string }) => {
    setActiveTech(tech)
    setOpen(true)
  }

  return (
    <>
      <h2 className="text-2xl font-bold text-text mb-4">Используемые технологии</h2>
      <AnimatedGrid className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {technologies.map((tech) => (
          <AnimatedCard
            key={tech.name}
            onClick={() => handleClick(tech)}
          >
            <p className="text-text font-medium">{tech.name}</p>
          </AnimatedCard>
        ))}
      </AnimatedGrid>

      {activeTech && (
        <Modal open={open} onClose={() => setOpen(false)}>
          <h3 className="text-xl font-bold mb-2">{activeTech.name}</h3>
          <p className="text-text">{activeTech.description}</p>
          <div className="mt-8 flex justify-end">
            <Button className="text-white" onClick={() => setOpen(false)}>Закрыть</Button>
          </div>

        </Modal>
      )}
    </>
  )
}
