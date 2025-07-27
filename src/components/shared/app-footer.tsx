import AppLogo from "@/components/shared/app-logo";
import SocialLinks from "@/components/shared/social-links";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import SubscribeForm from "@/components/shared/subscribe-form";
import { getCategories } from "@/lib/sanity-utils";
import { Category } from "@/types/category";

export const navLinks = [
  { name: "Trang chủ", href: "/" },
  { name: "Blog", href: "/blog" },
  { name: "Về tôi", href: "/about-me" },
  { name: "Liên hệ", href: "/contact" },
];

export default async function AppFooter() {
  const categories: Category[] = await getCategories();

  return (
    <div className="w-full p-3">
      <div className="w-full max-w-7xl border rounded-lg mx-auto">
        <div className="w-full grid lg:grid-cols-3 grid-cols-1">
          <div className="space-y-3 lg:p-5 p-3">
            <AppLogo />
            <p className="text-sm text-muted-foreground">
              Viết là cách mình hiểu thế giới, còn đọc là cách bạn lắng nghe tâm
              hồn. Chào mừng bạn đến với góc nhỏ của mình – nơi những câu chuyện
              bắt đầu.
            </p>
            <SocialLinks />
          </div>

          <Separator orientation="horizontal" className="lg:hidden block" />

          <div className="grid grid-cols-2 text-sm lg:p-5 p-3 lg:border-x ">
            <div className="space-y-3">
              <p className="font-semibold">Liên kết nhanh</p>
              <div className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-3 text-end">
              <p className="font-semibold">Danh mục</p>
              <div className="flex flex-col space-y-2">
                {categories.map((category) => (
                  <Link
                    href={"/"}
                    key={category.name}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Separator orientation="horizontal" className="lg:hidden block" />

          <div className="lg:p-5 p-3 space-y-5">
            <p className="text-sm font-semibold">
              Đăng ký nhận thông báo về bài viết mới nhất!
            </p>
            <SubscribeForm />
          </div>
        </div>

        <div className="w-full lg:p-5 p-3 flex flex-wrap items-center justify-between text-muted-foreground text-xs gap-2 border-t-1">
          <p>Copyright © 2025. Toàn bộ bản quyền thuộc Quang Blog</p>
          <div className="flex items-center gap-2">
            <Link href={"/"}>Điều khoản dịch vụ</Link>
            <div className="w-[1px] h-3 bg-muted-foreground"></div>
            <Link href={"/"}>Chính sách bảo mật</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
