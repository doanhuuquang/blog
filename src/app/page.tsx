import Link from "next/link";
import { type SanityDocument } from "next-sanity";

import { client } from "@/sanity/client";
import { PostCard } from "@/components/shared/post-card";
import { Post } from "@/types/post";

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt}`;

const options = { next: { revalidate: 30 } };

export default async function IndexPage() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);
  const post: Post = {
    id: "",
    title: "Sample Post Sample Post Sample Post Sample Post Sample Post",
    excerpt: "This is a sample post excerpt.",
    content: "This is the full content of the sample post.",
    author: {
      name: "Doan Huu Quang",
      avatar: "/placeholder-avatar.png",
    },
    publishedAt: "Thang 1, 2023",
    readTime: 5,
    category: "Category Name",
    tags: ["tag1", "tag2"],
    image:
      "https://i.pinimg.com/736x/5d/95/89/5d958995bab494569c1cf4fc3cd2a518.jpg",
    slug: "sample-post",
  };
  return (
    <main className="container mx-auto min-h-screen max-w-7xl p-3">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        <PostCard post={post} variant="compact" />
        <PostCard post={post} variant="compact" />
        <PostCard post={post} variant="compact" />
        <PostCard post={post} variant="compact" />
      </div>
    </main>
  );
}
