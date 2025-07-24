import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function AppLogo({
  className,
  size = 80,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <Link href={"/"} className={cn("flex items-center gap-2", className)}>
      <Image
        src="/assets/logos/logo.svg"
        alt="Logo"
        width={size}
        height={size}
        className="block dark:hidden"
      />
      <Image
        src="/assets/logos/logo-dark.svg"
        alt="Logo"
        width={size}
        height={size}
        className=" hidden dark:block"
      />
      <p className="font-dancing" style={{ fontSize: `${size / 3}px` }}>
        Blog
      </p>
    </Link>
  );
}
