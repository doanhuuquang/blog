import Image from "next/image";

const socialCardClassName =
  "hover:scale-120 hover:shadow-2xl rounded-lg cursor-pointer transition-transform duration-500";

export default function AboutMe() {
  return (
    <main className="space-y-10">
      <div className="w-full min-h-[calc(100vh-80px)] h-fit p-3 grid lg:grid-cols-2 grid-cols-1 overflow-hidden bg-[url(/assets/images/about-me-hero-section-cover.svg)] bg-no-repeat bg-cover bg-center">
        <div className="flex z-1 flex-col items-center justify-center text-[#202D4E]">
          <p className="text-2xl">{"Hey There, I'm"}</p>
          <p className="lg:text-[80px] md:text-[70px] text-[50px] font-bold uppercase">
            Quang
          </p>
          <p className="max-w-sm text-center">
            Một lập trình viên tự do với niềm đam mê chia sẻ những câu chuyện
            trong cuộc sống
          </p>
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
      <div className="w-full px-3">
        <div className="w-full max-w-7xl m-auto">
          <div className="p-10 space-y-10 bg-[#D5FF3F] text-[#161717] rounded-sm">
            <p className="text-center font-bold text-3xl">Về tôi</p>
            <p>
              {
                "Hi there! I'm Rahul, a third-year Computer Science student at SRM Institute with a passion for crafting user-centric experiences. I specialize in UI/UX design, front-end development, and graphic design, with expertise in HTML, CSS, JavaScript, React, Node.js, Tailwind CSS, QML, and C++. I thrive on collaboration and bring experience in agile scrum methodologies. Beyond coding, I enjoy photography, graphic design, and exploring music. Let's connect and bring your digital visions to life"
              }
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
