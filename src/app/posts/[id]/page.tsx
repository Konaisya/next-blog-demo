import { Post } from '@/types/jsonplaceholder'

interface PostPageProps {
  params: { id: string }
}

export const dynamic = 'force-dynamic'

export default async function PostPage({ params }: PostPageProps) {
 const maybeParams = params as unknown as { id: string } | Promise<{ id: string }>
const { id } = (await maybeParams) as { id: string }

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { cache: 'no-store' })
  if (!res.ok) throw new Error('Failed to fetch post')
  const post: Post = await res.json()

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <div className="card p-6 rounded-xl shadow-lg transition-colors">
        <h1 className="text-3xl font-extrabold text-text mb-4">{post.title}</h1>
        <p className="text-text text-lg leading-relaxed">{post.body}</p>

        <div className="mt-6 flex gap-3 flex-wrap">
          <span className="px-3 py-1 rounded-full font-semibold text-sm" style={{ background: 'var(--accent)', color: 'var(--accent-text)' }}>
            Пост ID: {post.id}
          </span>
        </div>
      </div>
    </div>
  )
}
