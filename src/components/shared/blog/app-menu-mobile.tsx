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
import { navLinks } from "@/components/shared/blog/app-nav";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import AppLogo from "@/components/shared/blog/app-logo";

export function AppMenuMobile() {
  const pathName = usePathname();

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="ghost" className="-translate-x-3">
          <Menu />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm space-y-5">
          <DrawerHeader>
            <DrawerTitle>
              <AppLogo size={25} className="justify-center" />
            </DrawerTitle>
            <DrawerDescription>
              Chào mừng bạn đến với Blog cá nhân của mình.
            </DrawerDescription>
          </DrawerHeader>
          <div className="p-4 space-y-4">
            <div className="flex flex-col items-center justify-center gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "relative after:absolute after:left-0 after:-bottom-1 after:h-[1.5px] after:content-[''] after:bg-gradient-to-r after:from-primary after:to-primary/50 after:rounded-full after:transition-all",
                    link.href === pathName
                      ? "after:w-full"
                      : "after:w-0 hover:after:w-full ease-in-out duration-300"
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
