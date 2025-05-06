import { getAllProducts } from '@/lib/queries'
import { urlFor } from '@/lib/sanity'
import Link from 'next/link'
import Image from 'next/image'
import { Product, Slug, SanityImageAsset } from '@/types'


export default async function ProductsPage() {
  const products = await getAllProducts()

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">محصولات</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        

        {products.map((product: Product) => (
            <Link
                key={product._id}
                href={`/products/${product.slug.current}`}
                className="border p-4 rounded shadow hover:shadow-lg transition"
            >
                <Image
                    src={urlFor(product.images[0]).width(400).height(300).url()}
                    alt={product.name}
                    width={400}
                    height={300}
                    className="rounded mb-3"
                />
                <h2 className="text-xl font-semibold">{product.name}</h2>
                <p className="text-gray-600 mt-1">
                    {product.price.toLocaleString()} تومان
                </p>
            </Link>
        ))}
      </div>
    </div>
  )
}
