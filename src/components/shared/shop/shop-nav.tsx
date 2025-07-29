"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const shopNavLinks = [
  { name: "Trang chủ", href: "/shop" },
  { name: "Sản phẩm", href: "/products" },
  { name: "Về chúng tôi", href: "/about-we" },
  { name: "Liên hệ/Tư vấn", href: "/contact" },
  { name: "Blog", href: "/blog" },
];

export default function ShopNav({ className }: { className?: string }) {
  const pathName = usePathname();

  return (
    <nav className={cn("flex gap-5 uppercase", className)}>
      {shopNavLinks.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className={cn(
            "text-sm font-bold",
            link.href === pathName
              ? "text-shop-primary"
              : "text-muted-foreground hover:text-shop-primary ease-in-out duration-300"
          )}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
