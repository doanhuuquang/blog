"use client";

import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Post } from "@/types/post";
import { PostCardFeatured } from "@/components/shared/blog/post-card";
import React from "react";
import { cn } from "@/lib/utils";

interface PostCarouselProps {
  posts: Post[];
}

function CarouselDot({
  index,
  carouselCurrentIndex,
  onDotClick,
}: {
  index: number;
  carouselCurrentIndex: number;
  onDotClick: (index: number) => void;
}) {
  const isCurrent = index === carouselCurrentIndex;
  return (
    <div
      className={cn(
        "rounded-full transition-all duration-300 cursor-pointer",
        isCurrent ? "w-5 h-2 bg-primary/80" : "w-2 h-2 bg-primary/20 "
      )}
      onClick={() => onDotClick(index)}
    ></div>
  );
}

export default function PostCarousel({ posts }: PostCarouselProps) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const handleDotClick = (index: number) => {
    if (api) {
      api.scrollTo(index);
    }
  };

  return (
    <div>
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
        className="rounded-sm overflow-hidden"
      >
        <CarouselContent>
          {posts.map((post) => (
            <CarouselItem key={post.slug}>
              <PostCardFeatured post={post} isCarouselItem={true} />
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious className="left-2 rounded-sm w-5 h-14 px-4 py-5 bg-primary/20" /> */}
        {/* <CarouselNext className="right-2 rounded-sm w-5 h-14 px-4 py-5 bg-primary/20" /> */}
      </Carousel>
      <div className="w-fit mx-auto flex gap-2 mt-3">
        {Array.from({ length: count }).map((_, index) => (
          <CarouselDot
            key={index}
            index={index}
            carouselCurrentIndex={current - 1}
            onDotClick={handleDotClick}
          />
        ))}
      </div>
    </div>
  );
}
