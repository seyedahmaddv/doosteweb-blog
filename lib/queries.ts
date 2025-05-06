import { client } from './sanity'

export async function getAllPosts() {
  return await client.fetch(`*[_type == "post"] | order(publishedAt desc){
    _id,
    title,
    slug,
    publishedAt,
    mainImage,
    author->{name, image},
    categories[]->{title},
    body
  }`)
}

export async function getPostBySlug(slug: string) {
  return await client.fetch(`*[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    publishedAt,
    mainImage,
    author->{name, image},
    categories[]->{title},
    body
  }`, { slug })
}

export async function getAllProducts() {
  return await client.fetch(`*[_type == "product"] | order(_createdAt desc){
    _id,
    name,
    slug,
    price,
    description,
    images
  }`)
}

export async function getProductBySlug(slug: string) {
  return await client.fetch(`*[_type == "product" && slug.current == $slug][0]{
    _id,
    name,
    slug,
    price,
    description,
    images
  }`, { slug })
}
