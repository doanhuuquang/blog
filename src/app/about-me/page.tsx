export default function AboutMe() {
  return (
    <main className="space-y-10">
      <div className="relative w-full h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0D41E1] to-[#07C8F9]">
        <div className="flex z-1 flex-col items-center justify-center p-3 text-[#ffffff] backdrop-blur-3xl w-full h-full">
          <p className="text-2xl">{"Hey There, I'm"}</p>
          <p className="text-[120px] font-bold uppercase font-bebas-neue text-base/35">
            Quang
          </p>
          <p className="max-w-sm text-center">
            Một lập trình viên tự do với niềm đam mê chia sẻ những câu chuyện
            trong cuộc sống
          </p>
        </div>
        <div
          className="w-full h-full animate-spin z-0 absolute"
          style={{ animationDuration: "20s" }}
        >
          <div className="w-full h-full relative">
            <div className="absolute top-0 left-0 lg:w-[500px] w-[300px] lg:h-[500px] h-[300px] bg-[#f72585] animate-spin square-to-circle glow-effect"></div>
            <div className="absolute bottom-0 right-0 lg:w-[500px] w-[300px] lg:h-[500px] h-[300px] bg-gradient-to-b from-[#7209b7] to-[#3a0ca3] animate-spin square-to-circle rounded-full glow-effect"></div>
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
