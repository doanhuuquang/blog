import { type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/client";
import { Post } from "@/types/post";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import {
  CAROUSEL_QUERY,
  COMPACT_POST_QUERY,
  POSTS_QUERY,
  POST_QUERY,
  RECOMMEND_POST_QUERY,
} from "./sanity-queries";

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

export function transformPost(doc: SanityDocument): Post {
  return {
    title: doc.title || "",
    excerpt: doc.excerpt || "",
    content: doc.content || "",
    author: doc.author || "",
    publishedAt: doc.publishedAt || "",
    readTime: doc.readTime || 0,
    category: doc.category || [],
    image: doc.image ? urlFor(doc.image)?.url() || "" : "",
    slug: doc.slug?.current || doc.slug || "",
  };
}

export async function getPosts(): Promise<Post[]> {
  const sanityPosts: SanityDocument[] = await client.fetch(
    POSTS_QUERY,
    {},
    {
      next: { revalidate: 30 },
    }
  );
  return sanityPosts.map(transformPost);
}

export async function getPost(slug: string): Promise<Post | null> {
  const post: SanityDocument = await client.fetch(
    POST_QUERY,
    { slug },
    {
      next: { revalidate: 30 },
    }
  );
  return transformPost(post);
}

export async function getPostsByCategory(categoryId: string): Promise<Post[]> {
  const sanityPosts: SanityDocument[] = await client.fetch(
    `*[
      _type == "post"
      && defined(slug.current)
      && $categoryId in category[]._ref
    ]|order(publishedAt desc){
      _id,
      title,
      excerpt,
      slug,
      publishedAt,
      readTime,
      image,
      author->{
        name
      },
      category[]->{
        name,
        description
      }
    }`,
    { categoryId },
    { next: { revalidate: 30 } }
  );
  return sanityPosts.map(transformPost);
}

export async function getCompactPosts(): Promise<Post[]> {
  const compactPosts: SanityDocument[] = await client.fetch(
    COMPACT_POST_QUERY,
    {},
    {
      next: { revalidate: 30 },
    }
  );

  return compactPosts.flatMap((doc) => doc.posts.map(transformPost));
}

export async function getRecommendPosts(): Promise<Post[]> {
  const compactPosts: SanityDocument[] = await client.fetch(
    RECOMMEND_POST_QUERY,
    {},
    {
      next: { revalidate: 30 },
    }
  );

  return compactPosts.flatMap((doc) => doc.posts.map(transformPost));
}

export async function getCarouselPosts(): Promise<Post[]> {
  const carouselPosts: SanityDocument[] = await client.fetch(
    CAROUSEL_QUERY,
    {},
    {
      next: { revalidate: 30 },
    }
  );

  return carouselPosts.flatMap((doc) => doc.posts.map(transformPost));
}
