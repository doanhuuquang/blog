import AppLogo from "@/components/shared/app-logo";
import { AppMenuMobile } from "@/components/shared/app-menu-mobile";
import AppNav from "@/components/shared/app-nav";
import { AppSearch } from "@/components/shared/app-search";
import { ModeSwitch } from "@/components/shared/mode-switch";
import { Button } from "@/components/ui/button";

export default function AppHeader() {
  return (
    <div className="w-full h-fit bg-background sticky top-0 z-100">
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
            <Button className="rounded-full">{"Let's Talk!"}</Button>
          </div>
        </div>
      </header>
    </div>
  );
}
