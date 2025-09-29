'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaGithub, FaTelegram } from 'react-icons/fa'

export default function ProfileContent() {
  const user = {
    name: 'Егор Зуев',
    nickname: 'Илья Фегоров',
    bio: 'Разработчик сайтов и веб-приложений. Люблю создавать интерактивные и современные интерфейсы с использованием современных технологий.',
    avatar: '/myphoto.jpg',
    github: 'https://github.com/Konaisya',
    telegram: 'https://t.me/Konaisya',
    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind', 'Framer Motion']
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, type: 'spring', stiffness: 100 }}
      className="flex flex-col md:flex-row max-w-6xl mx-auto p-8 gap-8"
    >
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h1 className="text-4xl font-bold text-text">{user.name}</h1>
          <h2 className="text-xl text-muted mt-1">@{user.nickname}</h2>
          <p className="text-text mt-4 leading-relaxed">{user.bio}</p>

          <div className="flex gap-3 mt-6">
            <motion.a
              href={user.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15 }}
              className="text-white bg-gray-800 hover:bg-gray-900 p-3 rounded-full transition-colors"
            >
              <FaGithub size={26} />
            </motion.a>
            <motion.a
              href={user.telegram}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15 }}
              className="text-white bg-blue-500 hover:bg-blue-600 p-3 rounded-full transition-colors"
            >
              <FaTelegram size={26} />
            </motion.a>
          </div>
        </div>

        <div className="mt-8 border-t border-[var(--accent)] pt-4">
          <h3 className="text-xl font-semibold text-text mb-3">Навыки</h3>
          <div className="flex flex-wrap gap-3">
            {user.skills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.4 }}
                className="px-4 py-2 bg-[var(--accent)] text-white rounded-full text-sm font-medium"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </div>

      <div className="relative w-full md:w-1/2 h-96 md:h-auto overflow-hidden rounded-xl shadow-lg">
        <Image
          src={user.avatar}
          alt={user.name}
          fill
          className="object-cover"
        />
      </div>
    </motion.div>
  )
}
