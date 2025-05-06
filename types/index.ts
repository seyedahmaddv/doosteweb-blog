export interface Slug {
    _type: 'slug';
    current: string;
  }
  
  export interface SanityImageAsset {
    _type: 'image';
    _key?: string;
    asset: {
      _ref: string;
      _type: 'reference';
    };
  }
  
  export type Product = {
    _id: string
    name: string
    slug: Slug
    price: number
    images: SanityImageAsset[]
    description: string
  }
  
  export interface Author {
    name: string;
    image?: SanityImageAsset;
    slug: Slug;
  }
  
  export interface Post {
    _id: string;
    title: string;
    slug: Slug;
    mainImage?: SanityImageAsset;
    publishedAt: string;
    author?: Author;
    body: any;
  }
  