"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AppLogo from "@/components/shared/app-logo";
import { AppMenuMobile } from "@/components/shared/app-menu-mobile";
import { AppSearch } from "@/components/shared/app-search";

export const navLinks = [
  { name: "Trang chủ", href: "/" },
  { name: "Blog", href: "/blog" },
  { name: "Về tôi", href: "/about" },
  { name: "Liên hệ", href: "/contact" },
];

export default function AppNav({ className }: { className?: string }) {
  const pathName = usePathname();

  return (
    <nav
      className={cn(
        "w-full max-w-7xl m-auto p-3 flex items-center justify-between",
        className
      )}
    >
      <div className="lg:hidden md:hidden">
        <AppMenuMobile />
      </div>

      <AppLogo size={30} className="lg:hidden md:hidden" />

      <div className="lg:flex md:flex hidden gap-5">
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

      <AppSearch />
    </nav>
  );
}
