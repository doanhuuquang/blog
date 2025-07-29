"use client";

import * as React from "react";
import { Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { Input } from "@/components/ui/input";
import { PostCardMinimal } from "@/components/shared/blog/post-card";

import type { Post } from "@/types/post";

export function AppSearch() {
  const [searchedPosts, setSearchedPosts] = React.useState<Post[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [searchString, setSearchString] = React.useState<string>("");
  const debounceRef = React.useRef<NodeJS.Timeout | null>(null);

  const handleInputChange = (input: string) => {
    setSearchString(input);

    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(() => {
      search(input);
    }, 500);
  };

  const search = async (input: string) => {
    try {
      setLoading(true);
      setSearchedPosts([]);

      if (input.trim() === "") {
        setLoading(false);
        return;
      }

      const response = await fetch(
        `/api/search?searchString=${encodeURIComponent(input)}`
      );

      if (!response.ok) {
        throw new Error("Lỗi xảy ra trong quá trình tìm kiếm.");
      }

      const posts: Post[] = await response.json();
      setSearchedPosts(posts);
    } catch (error) {
      console.error("Lỗi khi tìm kiếm: ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <div className="lg:bg-accent bg-transparent lg:translate-x-0 translate-x-3 rounded-sm flex items-center pr-3">
          <Input
            type="text"
            placeholder="Khám phá thêm bài đọc..."
            className="lg:block md:hidden hidden"
            readOnly
          />
          <Search className="size-4" />
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <div className=" mx-auto w-full h-[75vh] max-w-lg flex flex-col">
          <DrawerHeader className="flex-none relative">
            <DrawerTitle>Tìm kiếm</DrawerTitle>
            <div className="mt-2 bg-accent rounded-sm flex items-center pr-3">
              <Input
                type="text"
                placeholder="Khám phá thêm bài đọc..."
                value={searchString}
                onChange={(e) => handleInputChange(e.target.value)}
              />
              <Search className="size-4" />
            </div>
            <div className="absolute z-50 -bottom-3 left-0 w-full h-3 bg-gradient-to-b from-background to-transparent"></div>
          </DrawerHeader>

          <div className="grow overflow-auto no-scrollbar p-3">
            {loading ? (
              <div className="flex items-center justify-center">
                <div className="text-muted-foreground">Đang tải...</div>
              </div>
            ) : (
              <div className="space-y-3">
                {searchedPosts.length > 0 ? (
                  searchedPosts.map((post) => (
                    <PostCardMinimal
                      key={post.slug}
                      post={post}
                      className="border-b"
                    />
                  ))
                ) : (
                  <p className="text-muted-foreground">
                    Không tìm thấy bài viết
                  </p>
                )}
              </div>
            )}
          </div>

          <DrawerFooter className="flex-none relative">
            <Button>Tìm kiếm</Button>
            <div className="absolute z-50 -top-3 left-0 w-full h-3 bg-gradient-to-t from-background to-transparent"></div>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
