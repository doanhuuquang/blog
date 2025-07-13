"use client";

import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Post } from "@/types/post";
import { PostCardFeatured } from "@/components/shared/post-card";

export default function PostCarousel({ posts }: { posts: Post[] }) {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
    >
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
  );
}
