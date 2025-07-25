import { cn } from "@/lib/utils";
import Link from "next/link";

export default function AppLogo({
  className,
  size = 30,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <Link href={"/"} className={cn("flex items-baseline gap-1", className)}>
      <p className="font-bold" style={{ fontSize: `${size}px` }}>
        QUANG
      </p>
      <p className="font-dancing" style={{ fontSize: `${size / 2}px` }}>
        Blog
      </p>
    </Link>
  );
}
