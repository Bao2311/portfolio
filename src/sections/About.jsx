import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/Globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";

const About = () => {
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing" id="about">
      <div className="flex flex-col items-start gap-2 mb-8">
        <p className="text-sm font-semibold tracking-wider uppercase text-lavender">// ABOUT ME</p>
        <h2 className="text-heading">Who Am I & What I Build</h2>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem]">
        {/* Grid 1: Personal Intro */}
        <div className="flex items-end grid-default-color grid-1 relative overflow-hidden group">
          <img
            src="assets/coding-pov.png"
            alt="coding"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5] opacity-80 group-hover:scale-105 transition-transform duration-500"
          />
          <div className="z-10 relative">
            <span className="inline-block px-2.5 py-1 mb-2 text-xs font-semibold rounded-md bg-lavender/20 text-lavender border border-lavender/30">
              Full-stack Developer · FPT Software Fresher
            </span>
            <p className="headtext text-2xl font-bold text-white">Hi, I'm Lê Quốc Bảo</p>
            <p className="subtext leading-relaxed">
              Tôi là Full-stack Developer chuyên sâu về <strong>Java (Spring Boot)</strong>, <strong>.NET (C#)</strong> và <strong>React 18</strong>. Kinh nghiệm thực chiến xây dựng hệ thống phân tán, xử lý 30+ REST APIs, cơ sở dữ liệu lớn và kiến trúc chuẩn Clean Code.
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              <span className="px-2 py-0.5 text-xs rounded bg-white/10 text-neutral-300">🎓 FPT University (2022–2026)</span>
              <span className="px-2 py-0.5 text-xs rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 font-medium">🏆 Học bổng 30% ĐH FPT</span>
              <span className="px-2 py-0.5 text-xs rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-medium">🎖️ Học bổng 8TR FPT Software BrSE</span>
              <a
                href="/topik-3-certificate.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-2 py-0.5 text-xs rounded bg-lavender/20 hover:bg-lavender/30 text-lavender hover:text-white border border-lavender/30 transition-all inline-flex items-center gap-1 group cursor-pointer"
                title="Xem chứng chỉ TOPIK 3 (PDF)"
              >
                <span>🇰🇷 TOPIK 3 Tiếng Hàn</span>
                <span className="text-[10px] group-hover:translate-x-0.5 transition-transform">↗</span>
              </a>
            </div>
          </div>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>

        {/* Grid 2: Engineering Philosophy */}
        <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full relative"
          >
            <p className="flex items-center text-4xl font-black text-white/10 tracking-widest uppercase select-none">
              CLEAN ARCHITECTURE
            </p>
            <Card
              style={{ rotate: "15deg", top: "15%", left: "15%" }}
              text="SOLID"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-20deg", top: "60%", left: "15%" }}
              text="Design Patterns"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "25deg", bottom: "25%", left: "65%" }}
              text="Spring Boot"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-35deg", top: "15%", left: "60%" }}
              text="ASP.NET Core"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "10deg", top: "45%", left: "40%" }}
              text="Repository & UoW"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-15deg", top: "72%", left: "42%" }}
              text="REST & WebSocket"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "30deg", top: "25%", left: "40%" }}
              image="assets/logos/java.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-25deg", top: "65%", left: "75%" }}
              image="assets/logos/csharp-pink.png"
              containerRef={grid2Container}
            />
          </div>
        </div>

        {/* Grid 3: Location & Timezone with 3D Globe */}
        <div className="grid-black-color grid-3 relative overflow-hidden flex items-center justify-between p-6">
          {/* Text Content - Always on top (z-20) */}
          <div className="z-20 relative w-full sm:w-[55%] max-w-[330px] flex flex-col justify-between h-full pointer-events-none">
            <div className="pointer-events-auto">
              <p className="headtext text-xl font-bold text-white flex items-center gap-2">
                <span>📍</span> Ho Chi Minh City, VN
              </p>
              <p className="subtext mt-1 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                Khu vực: Quận 9, TP. Hồ Chí Minh (UTC+7). Sẵn sàng nhận việc Onsite, Hybrid hoặc Remote linh hoạt.
              </p>
            </div>
            <div className="mt-4 p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md pointer-events-auto w-fit shadow-lg">
              <p className="text-[11px] text-neutral-400 font-medium">Current Status</p>
              <p className="text-xs sm:text-sm font-semibold text-emerald-400 flex items-center gap-1.5 mt-0.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                Open to Opportunities
              </p>
            </div>
          </div>

          {/* Soft gradient fade so text is always 100% legible */}
          <div className="absolute inset-y-0 left-0 w-3/5 bg-gradient-to-r from-midnight via-midnight/80 to-transparent pointer-events-none z-10 hidden sm:block" />

          {/* 3D Globe Docked to the Right Side (z-10) with Responsive Size */}
          <figure className="absolute -right-16 -bottom-14 sm:-right-8 sm:top-1/2 sm:-translate-y-1/2 pointer-events-auto z-10 flex items-center justify-center">
            <Globe
              className="max-w-[360px]"
              canvasClassName="size-[18rem] sm:size-[21rem] md:size-[22rem]"
            />
          </figure>
        </div>

        {/* Grid 4: Collaboration CTA */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-3 size-full text-center p-2">
            <span className="text-3xl">🤝</span>
            <p className="headtext font-bold text-white text-lg md:text-xl">
              Bạn có cơ hội phù hợp hay muốn bắt đầu dự án?
            </p>
            <p className="text-xs text-white/80">
              Tôi luôn sẵn sàng trao đổi về công việc, dự án hoặc các giải pháp kỹ thuật.
            </p>
            <CopyEmailButton />
          </div>
        </div>

        {/* Grid 5: Tech Stack & Orbit */}
        <div className="grid-default-color grid-5 relative overflow-hidden">
          <div className="z-10 w-[45%] flex flex-col justify-center h-full">
            <p className="headtext text-xl font-bold text-white">Core Tech Stack</p>
            <p className="subtext leading-relaxed mt-1">
              Hệ sinh thái công nghệ: Java (Spring Boot), C# (ASP.NET Core), PostgreSQL, SQL Server, Docker, React 18, Tailwind CSS, và các công cụ AI hỗ trợ phát triển tối ưu.
            </p>
            <div className="flex gap-2 mt-3">
              <span className="px-2 py-1 text-xs rounded-md bg-royal/40 text-lavender border border-royal/60">Backend Focus</span>
              <span className="px-2 py-1 text-xs rounded-md bg-royal/40 text-aqua border border-royal/60">Full-stack Capable</span>
            </div>
          </div>
          <div className="absolute inset-y-0 md:inset-y-4 w-full h-full start-[45%] md:scale-110 flex items-center justify-center pointer-events-none">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
