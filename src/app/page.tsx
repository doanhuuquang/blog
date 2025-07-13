import { type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/client";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

import {
  PostCard,
  PostCardCompact,
  PostCardFeatured,
} from "@/components/shared/post-card";
import { Post } from "@/types/post";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{
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
}`;
const options = { next: { revalidate: 30 } };
const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

export default async function Page() {
  const sanityPosts: SanityDocument[] = await client.fetch<SanityDocument[]>(
    POSTS_QUERY,
    {},
    options
  );
  const posts: Post[] = sanityPosts.map((doc) => ({
    title: doc.title || "",
    excerpt: doc.excerpt || "",
    content: doc.content || "",
    author: doc.author || { name: "Unknown Author" },
    publishedAt: doc.publishedAt || "",
    readTime: doc.readTime || 0,
    category: doc.category || [],
    image: doc.image ? urlFor(doc.image)?.url() || "" : "",
    slug: doc.slug?.current || doc.slug || "",
  }));

  console.log(posts);

  return (
    <main className="mx-auto min-h-screen max-w-7xl p-3 space-y-15">
      <div className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {posts.map((post) => (
            <PostCardCompact key={post.slug} post={post} />
          ))}
        </div>
        <Carousel>
          <CarouselContent>
            {posts.map((post) => (
              <CarouselItem key={post.slug}>
                <PostCardFeatured post={post} isCarouselItem={true} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 rounded-sm w-5 h-14 px-4 py-5 bg-primary/20 backdrop-blur-lg" />
          <CarouselNext className="right-2 rounded-sm w-5 h-14 px-4 py-5 bg-primary/20 backdrop-blur-lg" />
        </Carousel>
      </div>

      <div className="space-y-5">
        <h2 className="text-2xl font-bold">Bài viết nổi bật</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>

      <div className="space-y-5">
        <h2 className="text-2xl font-bold">Biên tập lựa chọn</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:gap-3 lg:gap-3 gap-10">
          {(() => {
            const featuredPost = posts.pop();
            return featuredPost ? (
              <PostCardFeatured post={featuredPost} />
            ) : null;
          })()}
          <div className="grid grid-cols-1 gap-3">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} direction="horizontal" />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
