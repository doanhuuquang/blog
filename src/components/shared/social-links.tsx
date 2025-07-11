"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const socialLinks = [
  {
    name: "GitHub",
    href: "",
    icon: "/assets/icons/github/github.svg",
    iconDark: "/assets/icons/github/github-dark.svg",
  },
  {
    name: "Facebook",
    href: "https://facebook.com/yourprofile",
    icon: "/assets/icons/facebook/facebook.svg",
    iconDark: "/assets/icons/facebook/facebook-dark.svg",
  },
  {
    name: "X (Twitter)",
    href: "https://x.com/yourprofile",
    icon: "/assets/icons/x/x.svg",
    iconDark: "/assets/icons/x/x-dark.svg",
  },
  {
    name: "Instagram",
    href: "https://instagram.com/yourprofile",
    icon: "/assets/icons/instagram/instagram.svg",
    iconDark: "/assets/icons/instagram/instagram-dark.svg",
  },
];

export default function SocialLinks({ className }: { className?: string }) {
  return (
    <div className={cn("flex gap-3 items-center", className)}>
      {socialLinks.map((link) => {
        return (
          <Link key={link.href} href={link.href} className="w-fit h-fit">
            <div className="w-5 h-5 relative">
              <Image
                src={link.icon}
                alt={`${link.name} icon`}
                width={20}
                height={20}
                className="absolute inset-0 dark:opacity-0 opacity-100 transition-opacity duration-0"
              />
              <Image
                src={link.iconDark}
                alt={`${link.name} icon`}
                width={20}
                height={20}
                className="absolute inset-0 dark:opacity-100 opacity-0 transition-opacity duration-0"
              />
            </div>
          </Link>
        );
      })}
    </div>
  );
}
