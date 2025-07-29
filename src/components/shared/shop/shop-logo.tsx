import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function ShopLogo({ className }: { className?: string }) {
  return (
    <Link href={"/shop"} className={cn("w-fit", className)}>
      <div className="relative w-full h-10 flex">
        <Image
          alt="Carton Sport"
          src={"/assets/logos/shop/logo-carton-sport.svg"}
          fill
          className="absolute dark:hidden block"
        />
        <Image
          alt="Carton Sport"
          src={"/assets/logos/shop/logo-dark-carton-sport.svg"}
          fill
          className="absolute dark:block hidden"
        />
      </div>
    </Link>
  );
}
