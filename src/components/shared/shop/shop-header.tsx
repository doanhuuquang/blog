import ShopLogo from "@/components/shared/shop/shop-logo";
import { ShopMenuMobile } from "@/components/shared/shop/shop-menu-mobile";
import ShopNav from "@/components/shared/shop/shop-nav";
import { ShopSearch } from "@/components/shared/shop/shop-search";

export default function ShopHeader() {
  return (
    <div className="w-full h-20 bg-background p-3">
      <header className="w-full max-w-7xl h-full mx-auto flex items-center justify-between">
        <div className="lg:hidden">
          <ShopMenuMobile />
        </div>
        <ShopLogo size={200} />
        <ShopNav className="lg:flex hidden" />
        <div className="flex items-center gap-2">
          <ShopSearch />
        </div>
      </header>
    </div>
  );
}
