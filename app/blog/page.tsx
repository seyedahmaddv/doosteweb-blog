import { getAllPosts } from '@/lib/queries'
import { urlFor } from '@/lib/sanity'
import Link from 'next/link'
import Image from 'next/image'
import { Post } from '@/types'

export default async function BlogPage() {
  const posts: Post[] = await getAllPosts()


  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">نوشته‌ها</h1>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
        

        {posts.map((post) => (
            <Link 
            href={`/blog/${post.slug.current}`} 
            key={post._id} 
            className="border p-4 rounded hover:shadow-md transition"
            >
                {post.mainImage && (
                    <Image
                        src={urlFor(post.mainImage).width(600).height(300).url()}
                        alt={post.title}
                        width={600}
                        height={300}
                        className="rounded mb-4 object-cover"
                    />
                )}
                <h2 className="text-xl font-semibold">{post.title}</h2>
                <p className="text-sm text-gray-500 mt-1">
                    {new Date(post.publishedAt).toLocaleDateString('fa-IR')}
                </p>
            </Link>
        ))}
      </div>
    </div>
  )
}
