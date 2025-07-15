import {
  PostCard,
  PostCardCompact,
  PostCardFeatured,
} from "@/components/shared/post-card";
import PostCarousel from "@/components/shared/post-carousel";
import {
  getPosts,
  getCarouselPosts,
  getCompactPosts,
  getRecommendPosts,
} from "@/lib/sanity-utils";

export default async function Page() {
  const posts = await getPosts();
  const carouselPosts = await getCarouselPosts();
  const compactPosts = await getCompactPosts();
  const recommendPosts = await getRecommendPosts();

  return (
    <main className="mx-auto min-h-screen max-w-7xl p-3 space-y-15">
      <div className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {compactPosts.map((post) => (
            <PostCardCompact key={post.slug} post={post} />
          ))}
        </div>
        <PostCarousel posts={carouselPosts} />
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
        <h2 className="text-2xl font-bold">Đề xuất</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:gap-3 lg:gap-3 gap-10">
          {(() => {
            const featuredPost = recommendPosts.pop();
            return featuredPost ? (
              <PostCardFeatured post={featuredPost} />
            ) : null;
          })()}
          <div className="grid grid-cols-1 gap-3">
            {recommendPosts.map((post) => (
              <PostCard key={post.slug} post={post} direction="horizontal" />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
