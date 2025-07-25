import Hero from "@/components/shared/hero";

export default async function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="space-y-10">
      <Hero />
      {children}
    </main>
  );
}
