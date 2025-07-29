import ShopHeader from "@/components/shared/shop/shop-header";

export default function ShopLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <ShopHeader />
      {children}
    </main>
  );
}
