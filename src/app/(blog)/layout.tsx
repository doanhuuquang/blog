import AppFooter from "@/components/shared/app-footer";
import AppHeader from "@/components/shared/app-header";
import { Toaster } from "sonner";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <AppHeader />
      <Toaster />
      <main className="min-h-[calc(100vh-433.19px)] pb-10">{children}</main>
      <AppFooter />
    </>
  );
}
