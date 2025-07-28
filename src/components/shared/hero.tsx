import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="w-full h-[calc(100vh-80px)] relative">
      <video
        src="assets/videos/hero.mp4"
        autoPlay
        loop
        muted
        className="w-full h-full object-cover"
      ></video>
      <div className="absolute top-0 left-0 w-full h-full bg-black/30 "></div>
      <div className="absolute top-0 left-0 w-full h-full p-3 flex flex-col gap-5 items-center justify-center text-center text-white">
        <h1 className="text-3xl font-bold max-w-3xl">Mình viết, Bạn đọc</h1>
        <p className="max-w-3xl text-white/80 text-lg">
          Viết là cách mình hiểu thế giới, còn đọc là cách bạn lắng nghe tâm
          hồn. Chào mừng bạn đến với góc nhỏ của mình – nơi những câu chuyện bắt
          đầu.
        </p>
        <Link
          href={"/contact"}
          className="flex gap-3 py-3 px-5 rounded-xs bg-white text-black hover:bg-gray-200"
        >
          Cho mình biết thêm suy nghĩ của bạn <ArrowUpRight />
        </Link>
      </div>
    </div>
  );
}
