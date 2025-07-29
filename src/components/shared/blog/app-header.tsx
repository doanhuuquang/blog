import AppLogo from "@/components/shared/blog/app-logo";
import { AppMenuMobile } from "@/components/shared/blog/app-menu-mobile";
import AppNav from "@/components/shared/blog/app-nav";
import { AppSearch } from "@/components/shared/blog/app-search";
import { ModeSwitch } from "@/components/shared/mode-switch";
import { UserRound } from "lucide-react";
import Link from "next/link";

export default function AppHeader() {
  return (
    <div className="w-full h-fit bg-background sticky top-0 z-100">
      {/* Header */}
      <header className="w-full max-w-7xl m-auto px-3 h-20 flex items-center justify-between">
        <div className="lg:hidden block">
          <AppMenuMobile />
        </div>

        <div className="flex items-center gap-10">
          {/* Logo */}
          <div className="flex  justify-start">
            <AppLogo size={35} />
          </div>

          <AppNav className="lg:flex hidden" />
        </div>

        <div className="flex items-center gap-10">
          <AppSearch />

          {/* Actions */}
          <div className="lg:flex hidden justify-end h-full items-center gap-3">
            <ModeSwitch />
            <div className="w-[1px] h-[20px] bg-accent"></div>
            <Link
              href={"/shop/account"}
              className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2 rounded-sm"
            >
              Tài khoản <UserRound className="size-4" />
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}
