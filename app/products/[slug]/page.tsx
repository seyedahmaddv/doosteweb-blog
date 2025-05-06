import { getProductBySlug } from '@/lib/queries'
import { urlFor } from '@/lib/sanity'
import Image from 'next/image'
import { Product, SanityImageAsset } from '@/types'

export default async function ProductPage({ params }: { params: { slug: string } }) {
  const product: Product = await getProductBySlug(params.slug)

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
      <p className="text-xl text-green-700 font-semibold mb-4">{product.price.toLocaleString()} تومان</p>
      <div className="grid grid-cols-2 gap-4 mb-6">
        {product.images.map((img: SanityImageAsset, idx) => (
          <Image
            key={idx}
            src={urlFor(img).width(500).height(400).url()}
            alt={product.name}
            width={500}
            height={400}
            className="rounded"
          />
        ))}
      </div>
      <p className="text-gray-700">{product.description}</p>
    </div>
  )
}
