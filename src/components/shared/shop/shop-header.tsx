import { ModeSwitch } from "@/components/shared/mode-switch";
import ShopCart from "@/components/shared/shop/shop-cart";
import ShopLogo from "@/components/shared/shop/shop-logo";
import { ShopMenuMobile } from "@/components/shared/shop/shop-menu-mobile";
import ShopNav from "@/components/shared/shop/shop-nav";
import { ShopSearch } from "@/components/shared/shop/shop-search";

export default function ShopHeader() {
  return (
    <div className="w-full h-20 bg-background p-3">
      <header className="w-full max-w-7xl h-full mx-auto flex items-center justify-between">
        <ShopLogo className="lg:w-56 w-40" />
        <ShopNav className="lg:flex hidden" />
        <div className="flex items-center gap-5">
          <div className="hidden lg:block">
            <ModeSwitch />
          </div>
          <ShopSearch />
          <ShopCart />
          <div className="lg:hidden">
            <ShopMenuMobile />
          </div>
        </div>
      </header>
    </div>
  );
}
