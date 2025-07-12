// import Link from "next/link";
// import { type SanityDocument } from "next-sanity";

// import { client } from "@/sanity/client";
import { PostCard, PostCardCompact } from "@/components/shared/post-card";
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
      "https://i.pinimg.com/736x/64/47/31/64473134b741ccb9562ec5b3c350f3d1.jpg",
    slug: "sample-post",
  };
  return (
    <main className="mx-auto min-h-screen max-w-7xl p-3 space-x-3 space-y-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        <PostCardCompact post={post} />
        <PostCardCompact post={post} />
        <PostCardCompact post={post} />
        <PostCardCompact post={post} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
        <PostCard direction="horizontal" post={post} />
        <PostCard direction="horizontal" post={post} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        <PostCard direction="vertical" post={post} />
        <PostCard direction="vertical" post={post} />
        <PostCard direction="vertical" post={post} />
        <PostCard direction="vertical" post={post} />
      </div>
    </main>
  );
}
