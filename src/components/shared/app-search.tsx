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

export function AppSearch() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <div className="lg:bg-accent md:bg-accent bg-transparent lg:translate-x-0 md:translate-x-0 translate-x-3 rounded-sm flex items-center px-3">
          <Input
            type="text"
            placeholder="Khám phá thêm bài đọc..."
            className="lg:block md:block hidden"
            readOnly
          />
          <Search className="size-4" />
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <div className=" mx-auto w-full h-[75vh] max-w-lg flex flex-col">
          <DrawerHeader className="flex-none relative">
            <DrawerTitle>Tìm kiếm</DrawerTitle>
            <div className="mt-2 bg-accent rounded-sm flex items-center px-3">
              <Input type="text" placeholder="Khám phá thêm bài đọc..." />
              <Search className="size-4" />
            </div>
            <div className="absolute z-50 -bottom-3 left-0 w-full h-3 bg-gradient-to-b from-background to-transparent"></div>
          </DrawerHeader>

          <div className="p-3 grow overflow-auto no-scrollbar">
            <h1>heheh</h1>
            <h1>heheh</h1>
            <h1>heheh</h1>
            <h1>heheh</h1>
            <h1>heheh</h1>
            <h1>heheh</h1>
            <h1>heheh</h1>
            <h1>heheh</h1>
            <h1>heheh</h1>
            <h1>heheh</h1>
            <h1>heheh</h1>
            <h1>heheh</h1>
            <h1>heheh</h1>
            <h1>heheh</h1>
            <h1>heheh</h1>
            <h1>heheh</h1>
            <h1>heheh</h1>
            <h1>heheh</h1>
            <h1>heheh</h1>
            <h1>heheh</h1>
            <h1>heheh</h1>
            <h1>heheh</h1>
            <h1>heheh</h1>
            <h1>heheh</h1>
            <h1>heheh</h1>
            <h1>heheh</h1>
            <h1>heheh</h1>
            <h1>heheh</h1>
            <h1>heheh</h1>
            <h1>heheh</h1>
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
