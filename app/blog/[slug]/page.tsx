// @ts-nocheck
import { getPostBySlug, getAllPosts } from '@/lib/queries'
import { urlFor } from '@/lib/sanity'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import { Post } from '@/types'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
    const posts = await getAllPosts()
    return posts.map((post: { slug: { current: string } }) => ({
        slug: post.slug.current,
    }))
}

// تعریف مستقیم پارامترها در Next.js 15
export default async function PostPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> | { slug: string }
}) {
  try {
    // await کردن params قبل از استفاده از آن
    const resolvedParams = await params;
    const decodedSlug = decodeURIComponent(resolvedParams.slug);

    // لاگ برای دیباگ
    console.log('Decoded slug:', decodedSlug);

    const post: Post = await getPostBySlug(decodedSlug);

    if (!post) {
      return notFound();
    }

    return (
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
        <p className="text-gray-500 text-sm mb-4">
          نوشته شده توسط {post.author?.name} در{' '}
          {new Date(post.publishedAt).toLocaleDateString('fa-IR')}
        </p>
        {post.mainImage && (
          <Image
            src={urlFor(post.mainImage).width(800).url()}
            alt={post.title}
            width={800}
            height={400}
            className="rounded mb-6"
          />
        )}
        <PortableText value={post.body} />
      </div>
    )
  } catch (error) {
    console.error('Error fetching post:', error);
    return notFound();
  }
}