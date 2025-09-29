'use client'

import Link from 'next/link'
import { Post } from '../types/jsonplaceholder'
import { motion } from 'framer-motion'

interface PostCardProps {
  post: Post
  index: number
}

export default function PostCard({ post, index }: PostCardProps) {
  return (
    <Link href={`/posts/${post.id}`}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: index * 0.05 }}
        className="card cursor-pointer hover:shadow-lg"
      >
        <h2 className="text-lg font-semibold mb-2">{post.title}</h2>
        <p className="text-sm text-muted line-clamp-3">{post.body}</p>
      </motion.div>
    </Link>
  )
}
