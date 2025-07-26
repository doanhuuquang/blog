import type { Metadata } from "next";
import { Manrope, Dancing_Script, Bebas_Neue } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import AppHeader from "@/components/shared/app-header";
import AppFooter from "@/components/shared/app-footer";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Quang's Blog",
  description: "A personal blog about web development and design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${manrope.className} ${dancingScript.variable} ${bebasNeue.variable} antialiased min-w-[300px] min-h-[200px]`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <AppHeader />
          <main className="min-h-[calc(100vh-433.19px)] pb-10">{children}</main>
          <AppFooter />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
