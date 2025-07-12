// import Link from "next/link";
// import { type SanityDocument } from "next-sanity";

// import { client } from "@/sanity/client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  PostCard,
  PostCardCompact,
  PostCardFeatured,
} from "@/components/shared/post-card";
import { Post } from "@/types/post";

// const POSTS_QUERY = `*[
//   _type == "post"
//   && defined(slug.current)
// ]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt}`;

// const options = { next: { revalidate: 30 } };

export default async function IndexPage() {
  // const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);
  const post: Post = {
    id: "",
    title: "Sample Post Sample Post Sample Post Sample Post Sample Post",
    excerpt: "This is a sample post excerpt.",
    content:
      "This is the full content of the sample post. This is the full content of the sample post. This is the full content of the sample post.",
    author: {
      name: "Doan Huu Quang",
      avatar: "/placeholder-avatar.png",
    },
    publishedAt: "Thang 1, 2023",
    readTime: 5,
    category: "Category Name",
    tags: ["tag1", "tag2"],
    image:
      "https://i.pinimg.com/736x/ca/0c/dc/ca0cdcc069a5587eb0565de20e7ad1eb.jpg",
    slug: "sample-post",
  };
  return (
    <main className="mx-auto min-h-screen max-w-7xl p-3 space-y-15">
      <div className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          <PostCardCompact post={post} />
          <PostCardCompact post={post} />
          <PostCardCompact post={post} />
          <PostCardCompact post={post} />
        </div>

        <Carousel>
          <CarouselContent>
            <CarouselItem>
              <PostCardFeatured post={post} isCarouselItem={true} />
            </CarouselItem>
            <CarouselItem>
              <PostCardFeatured post={post} isCarouselItem={true} />
            </CarouselItem>
            <CarouselItem>
              <PostCardFeatured post={post} isCarouselItem={true} />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="left-2 rounded-sm w-5 h-14 px-4 py-5 bg-primary/20 backdrop-blur-lg" />
          <CarouselNext className="right-2 rounded-sm w-5 h-14 px-4 py-5 bg-primary/20 backdrop-blur-lg" />
        </Carousel>
      </div>

      <div className="space-y-5">
        <h2 className="text-2xl font-bold">Bài viết nổi bật</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          <PostCard post={post} />
          <PostCard post={post} />
          <PostCard post={post} />
          <PostCard post={post} />
          <PostCard post={post} />
        </div>
      </div>

      <div className="space-y-5">
        <h2 className="text-2xl font-bold">Biên tập lựa chọn</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:gap-3 lg:gap-3 gap-10">
          <PostCardFeatured post={post} />
          <div className="grid grid-cols-1 gap-3">
            <PostCard post={post} direction="horizontal" />
            <PostCard post={post} direction="horizontal" />
            <PostCard post={post} direction="horizontal" />
          </div>
        </div>
      </div>
    </main>
  );
}
