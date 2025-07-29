import Image from "next/image";
import Link from "next/link";

export default function ShopLogo({
  size = 56,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <Link href={"/shop"} className={className}>
      <div className="flex" style={{ width: size }}>
        <Image
          alt="Carton Sport"
          src={"/assets/logos/shop/logo-carton-sport.svg"}
          width={200}
          height={100}
          className="dark:hidden block"
        />
        <Image
          alt="Carton Sport"
          src={"/assets/logos/shop/logo-dark-carton-sport.svg"}
          width={200}
          height={100}
          className="dark:block hidden"
        />
      </div>
    </Link>
  );
}
