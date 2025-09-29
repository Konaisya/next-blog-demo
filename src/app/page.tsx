import { Post } from '../types/jsonplaceholder'
import PostCard from '../components/PostCard'
import AddPostButton from '../components/AddPostButton'

export const dynamic = 'force-dynamic' 

async function getPosts(): Promise<Post[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    cache: 'no-store'
  })
  if (!res.ok) throw new Error('Failed to fetch posts')
  return res.json()
}

export default async function HomePage() {
  const posts = await getPosts()

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-text">Последние посты</h1>
        <AddPostButton />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.slice(0, 12).map((post, index) => (
          <PostCard key={post.id} post={post} index={index} />
        ))}
      </div>
    </div>
  )
}
