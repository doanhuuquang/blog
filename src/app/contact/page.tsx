import ContactForm from "@/components/shared/contact-form";
import { Mail, MapPin, PhoneCall } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="w-full mt-5 p-3">
      <div className="w-full bg-accent rounded-md max-w-7xl border h-full m-auto grid lg:grid-cols-7 grid-cols-1 lg:gap-10 overflow-hidden">
        <div className="col-span-3 w-full h-full bg-background  lg:p-10 p-5 flex flex-col justify-between gap-10">
          <div className="space-y-3">
            <p className="text-3xl font-black">Thông tin liên hệ</p>
            <p className="opacity-75">
              Nói gì đó để bắt đầu cuộc trò chuyện nhé!
            </p>
          </div>

          <div className="space-y-5">
            <div className="flex gap-5">
              <PhoneCall size={20} />
              <p>0336314376</p>
            </div>
            <div className="flex gap-5">
              <Mail size={20} />
              <p>doanhuuquang.dev@gmail.com</p>
            </div>
            <div className="flex gap-5">
              <MapPin size={20} />
              <p>75 Cửu Việt 2, Trâu Quỳ, Gia Lâm, Hà Nội</p>
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </main>
  );
}
