import { getPostBySlug } from '@/lib/queries'
import { urlFor } from '@/lib/sanity'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import { Post } from '@/types'
import { notFound } from 'next/navigation'

export default async function PostPage({ params }: { params: { slug: string } }) {
    try {
        // دیکد کردن اسلاگ
        const decodedSlug = decodeURIComponent(params.slug)

        // لاگ برای دیباگ
        console.log('Decoded slug:', decodedSlug)

        const post: Post = await getPostBySlug(decodedSlug)

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
    } catch {
        return notFound()
    }
}
