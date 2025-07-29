"use client";

import * as React from "react";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ModeSwitch } from "@/components/shared/mode-switch";
import { shopNavLinks } from "@/components/shared/shop/shop-nav";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import ShopLogo from "@/components/shared/shop/shop-logo";

export function ShopMenuMobile() {
  const pathName = usePathname();

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Menu className="size-5" />
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm space-y-5">
          <DrawerHeader>
            <DrawerTitle className="flex items-center justify-center mb-3">
              <ShopLogo size={150} />
            </DrawerTitle>
            <DrawerDescription>
              Chào mừng bạn đến với Blog cá nhân của mình.
            </DrawerDescription>
          </DrawerHeader>
          <div className="p-4 space-y-4">
            <div className="flex flex-col items-center justify-center gap-3">
              {shopNavLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "relative after:absolute after:left-0 after:-bottom-1 after:h-[1.5px] after:content-[''] after:bg-gradient-to-r after:from-primary after:to-primary/50 after:rounded-full after:transition-all",
                    link.href === pathName
                      ? "text-shop-primary"
                      : "text-muted-foreground hover:text-shop-primary ease-in-out duration-300"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <DrawerFooter>
            <div className="flex justify-center h-full items-center gap-3">
              <ModeSwitch />
              <div className="w-[1px] h-[20px] bg-accent"></div>
              <Button className="rounded-full">{"Let's Talk!"}</Button>
            </div>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
