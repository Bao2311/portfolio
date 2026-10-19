import { useState } from "react";
import { Particles } from "../components/Particles";
import CvDownloadDropdown from "../components/CvDownloadDropdown";

const Contact = () => {
  const [copiedType, setCopiedType] = useState(null);

  const email = "lequocbaotxdh@gmail.com";
  const phone = "0915243557";
  const phoneDisplay = "0915 243 557";

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => {
      setCopiedType(null);
    }, 2200);
  };

  return (
    <section id="contact" className="relative flex flex-col items-center c-space section-spacing overflow-hidden">
      {/* Background Particles */}
      <Particles
        className="absolute inset-0 -z-50"
        quantity={65}
        ease={80}
        color={"#7a57db"}
        refresh
      />

      {/* Ambient Cosmic Halos */}
      <div className="absolute top-1/3 -left-48 w-[600px] h-[600px] bg-royal/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 -right-48 w-[600px] h-[600px] bg-aqua/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col items-center text-center gap-3 mb-12 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-lavender/10 text-lavender border border-lavender/25 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>✦ MISSION CONTROL // DIRECT TRANSMISSION FREQUENCY ✦</span>
        </div>
        <h2 className="text-heading">Sẵn Sàng Hợp Tác &amp; Nhận Việc Mới</h2>
        <p className="text-sm sm:text-base text-neutral-300 max-w-2xl leading-relaxed">
          Tôi đang tìm kiếm cơ hội làm việc với vị trí{" "}
          <strong className="text-white">Full-stack / Backend Developer (Java 17 · .NET 9 · React)</strong>.
          Sẵn sàng phỏng vấn và nhận việc ngay tại <span className="text-lavender font-medium">TP. Hồ Chí Minh</span> theo hình thức Onsite, Hybrid hoặc Remote.
        </p>
      </div>

      {/* Main 2-Column Balanced Astronaut Command Center Grid */}
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Column: Developer Profile Passport Terminal */}
        <div className="lg:col-span-6 flex flex-col justify-between rounded-3xl bg-midnight/85 border border-white/10 backdrop-blur-xl p-6 sm:p-8 shadow-2xl relative overflow-hidden group hover:border-lavender/40 transition-all duration-300 h-full">
          <div className="absolute top-0 right-0 w-72 h-72 bg-royal/10 rounded-full blur-3xl pointer-events-none group-hover:bg-lavender/15 transition-all" />

          <div>
            {/* Terminal Window Header */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                <span className="text-xs font-mono text-neutral-400 ml-2">astronaut_log // developer_profile.json</span>
              </div>
              <span className="text-[11px] font-mono uppercase px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                READY
              </span>
            </div>

            {/* Profile Code Block */}
            <div className="font-mono text-xs sm:text-sm text-neutral-300 space-y-1.5 bg-[#050616]/75 p-4 sm:p-5 rounded-2xl border border-white/5 leading-relaxed overflow-x-auto">
              <p className="break-words">
                <span className="text-lavender">const</span> developer = {"{"}
              </p>
              <p className="pl-4 break-words">
                <span className="text-neutral-400">"name":</span> <span className="text-emerald-300">"Lê Quốc Bảo"</span>,
              </p>
              <p className="pl-4 break-words">
                <span className="text-neutral-400">"role":</span> <span className="text-emerald-300">"Full-stack Developer"</span>,
              </p>
              <p className="pl-4 break-words">
                <span className="text-neutral-400">"status":</span> <span className="text-cyan-300">"🟢 Open to Work"</span>,
              </p>
              <p className="pl-4 break-words">
                <span className="text-neutral-400">"backend":</span> <span className="text-amber-300">["Java (Spring Boot)", ".NET 9 (C#)"]</span>,
              </p>
              <p className="pl-4 break-words">
                <span className="text-neutral-400">"frontend":</span> <span className="text-amber-300">["React 18", "TypeScript", "Tailwind"]</span>,
              </p>
              <p className="pl-4 break-words">
                <span className="text-neutral-400">"database":</span> <span className="text-amber-300">["PostgreSQL", "SQL Server"]</span>,
              </p>
              <p className="pl-4 break-words">
                <span className="text-neutral-400">"languages":</span> <span className="text-emerald-300">["Vietnamese (Native)", <a href="/topik-3-certificate.pdf" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors cursor-pointer" title="Xem chứng chỉ TOPIK 3 (PDF)">"Korean (TOPIK 3 ↗)"</a>]</span>,
              </p>
              <p className="pl-4 break-words">
                <span className="text-neutral-400">"experience":</span> <span className="text-lavender">"Fresher @ FPT Software"</span>
              </p>
              <p className="break-words">{"}"};</p>
            </div>
          </div>

          {/* Quick CTA Actions under Profile */}
          <div className="mt-6 pt-5 border-t border-white/10 flex flex-col sm:flex-row gap-3">
            <CvDownloadDropdown
              label="Tải CV (PDF)"
              icon={
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              }
              position="top-left"
              containerClassName="w-full sm:flex-1"
              triggerClassName="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-royal to-lavender hover:opacity-95 rounded-xl transition-all hover:scale-[1.02] shadow-lg shadow-royal/30"
            />

            <a
              href="https://github.com/Bao2311"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold text-neutral-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all hover:scale-[1.02]"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.1.82-.26.82-.57v-2c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 013-.4c1.02 0 2.04.13 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.69.82.57C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span>GitHub</span>
            </a>
          </div>
        </div>

        {/* Right Column: Unified Communication & Deployment Console */}
        <div className="lg:col-span-6 flex flex-col justify-between rounded-3xl bg-midnight/85 border border-white/10 backdrop-blur-xl p-6 sm:p-8 shadow-2xl relative overflow-hidden group hover:border-lavender/40 transition-all duration-300 h-full">
          <div className="absolute top-0 right-0 w-72 h-72 bg-aqua/10 rounded-full blur-3xl pointer-events-none group-hover:bg-aqua/15 transition-all" />

          <div className="space-y-4">
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-xs font-mono text-cyan-300 uppercase tracking-wider font-semibold">
                  DIRECT TRANSMISSION HUB
                </span>
              </div>
              <span className="text-[11px] font-mono text-neutral-400">
                // SẴN SÀNG KẾT NỐI
              </span>
            </div>

            {/* Channel 1: Email Card */}
            <div className="p-4 sm:p-4.5 rounded-2xl bg-[#050616]/70 border border-white/5 hover:border-lavender/30 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 group/item">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-11 h-11 rounded-xl bg-royal/20 border border-royal/30 flex items-center justify-center text-lavender group-hover/item:scale-105 transition-transform shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider">Email liên hệ</span>
                    <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium">
                      Ưu tiên
                    </span>
                  </div>
                  <p className="text-sm sm:text-base font-semibold text-white group-hover/item:text-lavender transition-colors mt-0.5 break-all sm:break-normal">
                    {email}
                  </p>
                  <p className="text-[11px] text-neutral-400">Phản hồi thư trong vòng 24 giờ</p>
                </div>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto shrink-0">
                <button
                  onClick={() => handleCopy(email, "email")}
                  className="flex-1 sm:flex-initial px-3 py-1.5 text-xs font-medium rounded-xl bg-white/5 hover:bg-white/15 text-neutral-200 hover:text-white border border-white/10 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  title="Sao chép địa chỉ email"
                >
                  {copiedType === "email" ? (
                    <>
                      <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-emerald-400 font-semibold">Đã chép!</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-3.5 h-3.5 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      <span>Sao chép</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${email}?subject=Trao%20đổi%20cơ%20hội%20việc%20làm%20-%20Lê%20Quốc%20Bảo`}
                  className="flex-1 sm:flex-initial px-3.5 py-1.5 text-xs font-semibold rounded-xl bg-royal hover:bg-lavender text-white transition-all flex items-center justify-center gap-1.5 shadow-md shadow-royal/20"
                >
                  <span>Gửi Mail</span>
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Channel 2: Phone & Zalo Card */}
            <div className="p-4 sm:p-4.5 rounded-2xl bg-[#050616]/70 border border-white/5 hover:border-lavender/30 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 group/item">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-11 h-11 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover/item:scale-105 transition-transform shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider">Điện thoại / Zalo</span>
                    <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 font-medium">
                      Trực tiếp
                    </span>
                  </div>
                  <p className="text-sm sm:text-base font-semibold text-white group-hover/item:text-lavender transition-colors mt-0.5">
                    {phoneDisplay}
                  </p>
                  <p className="text-[11px] text-neutral-400">Kết nối Zalo nhanh hoặc gọi thoại trực tiếp</p>
                </div>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto shrink-0">
                <button
                  onClick={() => handleCopy(phone, "phone")}
                  className="flex-1 sm:flex-initial px-3 py-1.5 text-xs font-medium rounded-xl bg-white/5 hover:bg-white/15 text-neutral-200 hover:text-white border border-white/10 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  title="Sao chép số điện thoại"
                >
                  {copiedType === "phone" ? (
                    <>
                      <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-emerald-400 font-semibold">Đã chép!</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-3.5 h-3.5 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      <span>Sao chép</span>
                    </>
                  )}
                </button>

                <a
                  href={`tel:${phone}`}
                  className="flex-1 sm:flex-initial px-3.5 py-1.5 text-xs font-semibold rounded-xl bg-emerald-600/90 hover:bg-emerald-500 text-white transition-all flex items-center justify-center gap-1.5 shadow-md shadow-emerald-600/20"
                >
                  <span>Gọi điện</span>
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Parameters 3: Location Coordinates & Work Format */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {/* Location */}
              <div className="p-3.5 rounded-xl bg-[#050616]/70 border border-white/5 flex flex-col justify-between">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[10px] font-semibold text-neutral-400 uppercase tracking-wider block">Khu vực làm việc</span>
                    <p className="text-xs font-semibold text-white">Quận 9, TP. Hồ Chí Minh</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 mt-1 flex-wrap">
                  <span className="text-[10px] px-2 py-0.5 rounded-md bg-white/5 text-neutral-300 border border-white/10">Thủ Đức</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-md bg-white/5 text-neutral-300 border border-white/10">Quận 1 / 2</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-md bg-white/5 text-neutral-300 border border-white/10">Bình Thạnh</span>
                </div>
              </div>

              {/* Work Format */}
              <div className="p-3.5 rounded-xl bg-[#050616]/70 border border-white/5 flex flex-col justify-between">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <div className="w-8 h-8 rounded-lg bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[10px] font-semibold text-neutral-400 uppercase tracking-wider block">Hình thức tiếp nhận</span>
                    <p className="text-xs font-semibold text-emerald-400">Sẵn sàng nhận việc</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 mt-1 flex-wrap">
                  <span className="text-[10px] px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 font-medium">Onsite</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-md bg-blue-500/10 text-blue-300 border border-blue-500/20 font-medium">Hybrid</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-md bg-purple-500/10 text-purple-300 border border-purple-500/20 font-medium">Remote</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Mission Readiness Banner */}
          <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs text-neutral-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Sẵn sàng phỏng vấn &amp; gia nhập đội ngũ ngay khi có lời mời nhận việc.</span>
            </div>
            <a
              href={`mailto:${email}?subject=Trao%20đổi%20cơ%20hội%20việc%20làm%20-%20Lê%20Quốc%20Bảo`}
              className="text-xs font-semibold text-lavender hover:text-white transition-colors underline shrink-0"
            >
              Liên hệ ngay ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
