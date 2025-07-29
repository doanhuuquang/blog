import { getBlogOwnerInfo } from "@/lib/sanity-utils";
import Image from "next/image";

const socialCardClassName =
  "hover:scale-120 hover:shadow-2xl rounded-lg cursor-pointer transition-transform duration-500";

export default async function AboutMe() {
  const blogOwnerInfo = await getBlogOwnerInfo();

  return (
    <main className="space-y-10">
      <div className="w-full bg-[#8DD8FF] relative overflow-hidden">
        <div
          className="absolute w-[100vw] h-[100vw] bg-gradient-to-r from-[#4E71FF] via-[#8DD8FF] to-[#BBFBFF] animate-spin"
          style={{ animationDuration: "10s" }}
        ></div>
        <div className="w-full min-h-[calc(100vh-80px)] h-fit p-3 grid lg:grid-cols-2 grid-cols-1 overflow-hidden backdrop-blur-[100px]">
          <div className="flex z-1 flex-col justify-center items-center text-[#202D4E]">
            <p className="text-2xl">{"Hey There, I'm"}</p>
            <p className="lg:text-[50px] md:text-[40px] text-[30px] font-bold uppercase">
              {blogOwnerInfo.name}
            </p>
            <p className="max-w-sm text-center">{blogOwnerInfo.introduction}</p>
          </div>
          <div className="flex items-center justify-center">
            <div className="w-fit max-w-4/6 grid grid-cols-2 lg:gap-5 gap-3 rotate-x-50 rotate-z-45 ">
              <Image
                src="/assets/images/3d-social-card/Github.svg"
                alt="Quang"
                width={200}
                height={200}
                className={socialCardClassName}
              />
              <Image
                src="/assets/images/3d-social-card/Insta.svg"
                alt="Quang"
                width={200}
                height={200}
                className={socialCardClassName}
              />
              <Image
                src="/assets/images/3d-social-card/Facebook.svg"
                alt="Quang"
                width={200}
                height={200}
                className={socialCardClassName}
              />

              <Image
                src="/assets/images/3d-social-card/Twitter.svg"
                alt="Quang"
                width={200}
                height={200}
                className={socialCardClassName}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full px-3">
        <div className="w-full max-w-7xl m-auto">
          <div className="lg:flex bg-[#D5FF3F] text-[#161717] rounded-sm overflow-hidden">
            <div className="lg:p-10 px-3 py-10 space-y-10">
              <p className="text-center font-bold text-3xl uppercase ">
                Về tôi
              </p>
              <p className="text-xl">{blogOwnerInfo.bio}</p>
            </div>
            <div className="relative w-full min-w-[40%] object-cover overflow-hidden aspect-square ">
              <Image alt={blogOwnerInfo.name} src={blogOwnerInfo.avatar} fill />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
