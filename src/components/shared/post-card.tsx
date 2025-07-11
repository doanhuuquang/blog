import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { Post, PostCardVariant } from "@/types/post";
import { Badge } from "@/components/ui/badge";

interface PostCardProps {
  post: Post;
  variant?: PostCardVariant;
  className?: string;
}

export function PostCard({
  post,
  variant = "default",
  className,
}: PostCardProps) {
  const baseClasses =
    "group shadow-none p-0 rounded-sm hover:bg-accent transition-all duration-300";

  const variantClasses = {
    default: "h-full",
    compact: "h-fit",
    featured: "h-full border-2 border-primary/20",
    minimal: "border-none shadow-none hover:shadow-md",
    horizontal: "flex-row h-auto",
  };

  const imageClasses = {
    default: "aspect-video object-cover w-full",
    compact: "aspect-[4/3] object-cover flex-shrink-0",
    featured: "aspect-[16/10] object-cover w-full",
    minimal: "aspect-video object-cover w-full",
    horizontal: "aspect-square object-cover w-32 h-32 flex-shrink-0",
  };

  const contentClasses = {
    default: "p-0",
    compact: "h-20 p-3 flex-1",
    featured: "p-8",
    minimal: "p-4",
    horizontal: "p-4 flex-1",
  };

  if (variant === "compact") {
    return (
      <div className="flex h-full rounded-sm items-center gap-3 w-full hover:bg-accent transition-all duration-300">
        <Link
          href={`/blog/${post.slug}`}
          className="flex h-full items-center gap-3 w-full"
        >
          {post.image && (
            <div className="relative aspect-[4/3] h-full flex-shrink-0 rounded-sm overflow-hidden">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
          )}
          <div className="flex-1 p-2 min-w-0">
            <div className="flex items-center gap-2 text-muted-foreground text-xs">
              <p className="line-clamp-1">{post.publishedAt}</p>
              <span className="w-[1px] h-[10px] bg-primary"></span>
              <p className="line-clamp-1">{post.author.name}</p>
            </div>
            <p className="line-clamp-2 text-sm font-bold">{post.title}</p>
          </div>
        </Link>
      </div>
    );
  }

  if (variant === "horizontal") {
    return (
      <Card className={cn(baseClasses, variantClasses.horizontal, className)}>
        <Link href={`/blog/${post.slug}`} className="flex">
          {post.image && (
            <div className="relative overflow-hidden">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                width={128}
                height={128}
                className={imageClasses.horizontal}
              />
            </div>
          )}
          <CardContent className={contentClasses.horizontal}>
            <div className="flex flex-col h-full">
              <Badge variant="secondary" className="w-fit mb-2">
                {post.category}
              </Badge>
              <h3 className="font-bold text-lg line-clamp-2 group-hover:text-primary transition-colors mb-2">
                {post.title}
              </h3>
              <p className="text-muted-foreground text-sm line-clamp-2 mb-4 flex-1">
                {post.excerpt}
              </p>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>{post.readTime} min</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Link>
      </Card>
    );
  }

  if (variant === "minimal") {
    return (
      <Card className={cn(baseClasses, variantClasses.minimal, className)}>
        <Link href={`/blog/${post.slug}`}>
          <CardContent className={contentClasses.minimal}>
            <h3 className="font-bold text-xl line-clamp-2 group-hover:text-primary transition-colors mb-2">
              {post.title}
            </h3>
            <p className="text-muted-foreground line-clamp-3 mb-4">
              {post.excerpt}
            </p>
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
              <span>{post.readTime} min read</span>
            </div>
          </CardContent>
        </Link>
      </Card>
    );
  }

  return (
    <Card className={cn(baseClasses, variantClasses[variant], className)}>
      <Link href={`/blog/${post.slug}`}>
        {post.image && (
          <div className="relative overflow-hidden rounded-t-lg">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              width={400}
              height={variant === "featured" ? 250 : 225}
              className={imageClasses[variant]}
            />
            {variant === "featured" && (
              <Badge className="absolute top-4 left-4">Featured</Badge>
            )}
          </div>
        )}
        <CardContent className={contentClasses[variant]}>
          <div className="flex items-center gap-2 mb-3">
            <Badge variant="secondary">{post.category}</Badge>
            {variant === "featured" &&
              post.tags.slice(0, 2).map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
          </div>

          <h3
            className={cn(
              "font-bold line-clamp-2 group-hover:text-primary transition-colors mb-3",
              variant === "featured" ? "text-2xl" : "text-xl"
            )}
          >
            {post.title}
          </h3>

          <p
            className={cn(
              "text-muted-foreground mb-4",
              variant === "featured" ? "line-clamp-3" : "line-clamp-2"
            )}
          >
            {post.excerpt}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Image
                src={post.author.avatar || "/placeholder.svg"}
                alt={post.author.name}
                width={24}
                height={24}
                className="rounded-full"
              />
              <span className="text-sm text-muted-foreground">
                {post.author.name}
              </span>
            </div>

            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{post.readTime} min</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}
