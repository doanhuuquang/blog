"use client";

import * as React from "react";
import { Menu, UserRound } from "lucide-react";

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
        <Menu className="size-5" />
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
                    link.href === pathName
                      ? "text-primary font-semibold"
                      : "text-muted-foreground hover:text-primary ease-in-out duration-300"
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
              <Link
                href={"/shop/account"}
                className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2 rounded-sm"
              >
                Tài khoản <UserRound className="size-4" />
              </Link>
            </div>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
