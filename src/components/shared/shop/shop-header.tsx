import { ModeSwitch } from "@/components/shared/mode-switch";
import ShopCart from "@/components/shared/shop/shop-cart";
import ShopLogo from "@/components/shared/shop/shop-logo";
import { ShopMenuMobile } from "@/components/shared/shop/shop-menu-mobile";
import ShopNav from "@/components/shared/shop/shop-nav";
import { ShopSearch } from "@/components/shared/shop/shop-search";
import { ArrowUpRight, UserRound } from "lucide-react";
import Link from "next/link";

export default function ShopHeader() {
  return (
    <div className="w-full bg-background sticky -top-12">
      {/* Top bar */}
      <div className="w-full bg-shop-primary h-12 flex items-center text-shop-primary-foreground p-3">
        <div className="w-full max-w-7xl m-auto flex items-center justify-center">
          <Link
            href={"/shop/products"}
            className="flex items-center justify-center gap-2 w-full "
          >
            <p className="max-w-[90%] truncate text-ellipsis text-sm">
              Tập luyện chưa bao giờ dễ dàng hơn - Bất kể đâu, bất kỳ lúc nào!
            </p>
            <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </div>

      <header className="w-full max-w-7xl h-20 p-3 mx-auto flex items-center justify-between">
        <ShopLogo className="lg:w-56 w-40" />
        <ShopNav className="lg:flex hidden" />
        <div className="flex items-center gap-5">
          <div className="hidden lg:block">
            <ModeSwitch />
          </div>
          <ShopSearch />
          <ShopCart />
          <Link href={"/shop/account"}>
            <UserRound className="size-5" />
          </Link>
          <div className="lg:hidden">
            <ShopMenuMobile />
          </div>
        </div>
      </header>
    </div>
  );
}
