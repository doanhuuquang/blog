import AppLogo from "@/components/shared/app-logo";
import AppNav from "@/components/shared/app-nav";
import { ModeSwitch } from "@/components/shared/mode-switch";
import SocialLinks from "@/components/shared/social-links";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function AppHeader() {
  return (
    <div className="w-full h-fit bg-background backdrop-blur-lg border-b-[1px] sticky lg:-top-[100px] md:-top-[100px] top-0 z-100">
      <header className="w-full max-w-7xl m-auto px-3 py-5 lg:grid md:grid hidden grid-cols-3 items-center">
        {/* Social links */}
        <SocialLinks className="flex justify-start" />

        {/* Logo */}
        <div className="flex justify-center">
          <AppLogo size={40} />
        </div>

        {/* Actions */}
        <div className="flex justify-end h-full items-center gap-3">
          <ModeSwitch />
          <div className="w-[1px] h-[20px] bg-accent"></div>
          <Button className="rounded-full">{"Let's Talk!"}</Button>
        </div>
      </header>
      <Separator orientation="horizontal" />
      <AppNav />
    </div>
  );
}
