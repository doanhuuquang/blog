import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, PhoneCall, SendHorizonal } from "lucide-react";

const inputClassName =
  "px-5 py-7 bg-white/60 rounded-md border-1 w-full outline-none";

export default function ContactPage() {
  return (
    <main className="w-full mt-5 p-3">
      <div className="w-full shadow-2xl shadow-[#FAA4BD50] bg-[#FAA4BD] rounded-md max-w-7xl h-full m-auto grid lg:grid-cols-7 grid-cols-1 lg:gap-10 overflow-hidden">
        <div className="col-span-3 w-full h-full bg-[#F564A9] shadow-2xl shadow-[#F564A9] text-[#533B4D] lg:p-10 p-5 flex flex-col justify-between gap-10">
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

        <div className="col-span-4 lg:space-y-10 space-y-5 lg:p-10 p-3 lg:mt-0 mt-10 text-black">
          <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:gap-10 gap-5">
            <div className="space-y-2">
              <Label htmlFor="lastName">Họ</Label>
              <Input
                type="text"
                id="lastName"
                placeholder="Họ của bạn"
                className={inputClassName}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="firstName">Tên</Label>
              <Input
                type="text"
                id="firstName"
                placeholder="Tên của bạn"
                className={inputClassName}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                placeholder="vidu@gmail.com"
                className={inputClassName}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Số điện thoại</Label>
              <Input
                type="number"
                id="phone"
                placeholder="Số điện thoại của bạn"
                className={inputClassName}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Lời nhắn</Label>
            <textarea
              id="message"
              placeholder="Nội dung lời nhắn của bạn"
              className={inputClassName}
            />
          </div>

          <Button className="float-right px-20 py-7 rounded-sm bg-blue-700 hover:bg-blue-800 text-white">
            Gủi tin nhắn
            <SendHorizonal />
          </Button>
        </div>
      </div>
    </main>
  );
}
