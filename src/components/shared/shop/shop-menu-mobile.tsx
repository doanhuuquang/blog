"use client";

import * as React from "react";
import { Menu } from "lucide-react";

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
            <DrawerTitle className="flex items-center justify-center my-3">
              <ShopLogo className="w-40" />
            </DrawerTitle>
            <DrawerDescription>
              Chào mừng bạn đến với Carton Sport
            </DrawerDescription>
          </DrawerHeader>
          <div className="p-4 space-y-4">
            <div className="flex flex-col items-center justify-center gap-3">
              {shopNavLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={
                    link.href === pathName
                      ? "text-shop-primary"
                      : "text-muted-foreground hover:text-shop-primary ease-in-out duration-300"
                  }
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <DrawerFooter>
            <div className="flex justify-center items-center">
              <ModeSwitch />
            </div>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
