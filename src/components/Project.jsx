import React, { useState } from "react";
import ProjectDetails from "./ProjectDetails";

const Project = ({
  title,
  badge,
  role,
  description,
  metrics = [],
  highlights = [],
  subDescription = [],
  href,
  github,
  liveDemo,
  image,
  tags = [],
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="relative rounded-3xl bg-midnight/85 border border-white/10 hover:border-lavender/50 transition-all duration-300 backdrop-blur-xl p-5 sm:p-7 flex flex-col justify-between shadow-2xl group overflow-hidden h-full">
        {/* Subtle Ambient Cosmic Glow inside Card */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-royal/10 rounded-full blur-3xl pointer-events-none group-hover:bg-lavender/15 transition-all duration-500" />
        <div className="absolute bottom-0 left-0 w-60 h-60 bg-aqua/5 rounded-full blur-3xl pointer-events-none group-hover:bg-aqua/10 transition-all duration-500" />

        <div>
          {/* 1. Preview Mockup Frame with Live Status HUD */}
          {image && (
            <div
              onClick={() => setIsOpen(true)}
              className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 bg-[#070a14] mb-5 group/thumb cursor-pointer shadow-lg hover:border-lavender/60 transition-all duration-300"
              title="Nhấn để xem ảnh phóng to & chi tiết hệ thống"
            >
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover sm:object-contain rounded-2xl group-hover/thumb:scale-[1.03] transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-transparent to-transparent pointer-events-none" />

              {/* Status Pills overlaid on image */}
              <div className="absolute top-3 left-3 flex flex-wrap gap-2 items-center z-10 pointer-events-none">
                {liveDemo ? (
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 backdrop-blur-md flex items-center gap-1.5 shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Live Online</span>
                  </span>
                ) : (
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-royal/30 text-lavender border border-lavender/30 backdrop-blur-md flex items-center gap-1.5 shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-lavender animate-pulse" />
                    <span>Capstone FPT</span>
                  </span>
                )}
              </div>

              {/* Quick View Button overlay on hover */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/thumb:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="px-4 py-2 text-xs font-semibold text-white bg-royal/90 rounded-xl backdrop-blur-md border border-white/20 shadow-xl flex items-center gap-2 transform translate-y-2 group-hover/thumb:translate-y-0 transition-transform">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <span>Xem Chi Tiết</span>
                </span>
              </div>
            </div>
          )}

          {/* 2. Header: Title, Role & Badges */}
          <div className="flex flex-col gap-2 mb-3">
            <div className="flex items-center justify-between gap-3 flex-wrap">
              <span className="text-xs font-mono uppercase tracking-wider text-sand font-medium">
                {badge}
              </span>
              {role && (
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-white/5 text-neutral-300 border border-white/10">
                  {role}
                </span>
              )}
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-lavender transition-colors">
              {title}
            </h3>
          </div>

          {/* 3. Description Paragraph */}
          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed mb-4">
            {description}
          </p>

          {/* 4. Architecture Telemetry Metrics Grid */}
          {metrics && metrics.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-5">
              {metrics.map((m, idx) => (
                <div
                  key={idx}
                  className="bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 rounded-xl p-2.5 text-center transition-colors"
                >
                  <span className="block text-sm sm:text-base font-bold text-lavender font-mono">
                    {m.value}
                  </span>
                  <span className="block text-[10px] sm:text-[11px] text-neutral-400 font-medium truncate mt-0.5" title={m.label}>
                    {m.label}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* 5. Key Architecture Highlights (Visible on Card!) */}
          {highlights && highlights.length > 0 && (
            <div className="mb-5 space-y-2 bg-[#050616]/60 p-3.5 sm:p-4 rounded-2xl border border-white/5">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-lavender" />
                <h4 className="text-xs font-semibold uppercase tracking-wider text-lavender font-mono">
                  Điểm Nhấn Kỹ Thuật &amp; Kiến Trúc:
                </h4>
              </div>
              <ul className="space-y-1.5">
                {highlights.slice(0, 3).map((hl, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                    <span className="text-lavender mt-1 shrink-0">✦</span>
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* 6. Tech Stack Badges */}
          <div className="flex flex-wrap gap-2 text-xs mb-6">
            {tags.map((tag) => (
              <span
                key={tag.id}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-neutral-200 text-xs font-medium hover:border-lavender/40 hover:bg-white/10 transition-colors"
              >
                {tag.path && (
                  <img src={tag.path} alt={tag.name} className="w-3.5 h-3.5 object-contain" />
                )}
                <span>{tag.name}</span>
              </span>
            ))}
          </div>
        </div>

        {/* 7. Action Hub Buttons */}
        <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 flex-wrap">
            {liveDemo ? (
              <>
                <a
                  href={liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-royal to-lavender hover:opacity-95 rounded-xl flex items-center gap-2 transition-all hover:scale-105 shadow-lg shadow-royal/30"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
                  <span>🚀 Trải Nghiệm Live Demo</span>
                </a>
                {github && (
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-2.5 text-xs sm:text-sm font-semibold text-neutral-300 hover:text-white bg-white/5 hover:bg-white/15 border border-white/10 rounded-xl flex items-center gap-2 transition-all hover:scale-105"
                    title="Mã nguồn trên GitHub"
                  >
                    <img src="/assets/logos/github.svg" className="w-4 h-4" alt="GitHub" />
                    <span>GitHub Repo</span>
                  </a>
                )}
              </>
            ) : (
              <>
                {github && (
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-royal to-lavender hover:opacity-95 rounded-xl flex items-center gap-2 transition-all hover:scale-105 shadow-lg shadow-royal/30"
                    title="Mã nguồn trên GitHub"
                  >
                    <img src="/assets/logos/github.svg" className="w-4 h-4 invert" alt="GitHub" />
                    <span>💻 Xem Mã Nguồn GitHub</span>
                  </a>
                )}
                <span className="px-3 py-2 text-xs font-mono rounded-xl bg-white/5 border border-white/10 text-neutral-400 hidden sm:inline-flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-lavender" />
                  <span>30+ APIs Backend</span>
                </span>
              </>
            )}
          </div>

          <button
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-1.5 px-4 py-2.5 text-xs sm:text-sm font-semibold text-lavender hover:text-white bg-lavender/10 hover:bg-lavender/25 border border-lavender/30 rounded-xl transition-all hover:scale-105 cursor-pointer ml-auto"
          >
            <span>Chi Tiết Hệ Thống</span>
            <img src="/assets/arrow-right.svg" className="w-3.5 h-3.5" alt="arrow" />
          </button>
        </div>
      </div>

      {isOpen && (
        <ProjectDetails
          title={title}
          badge={badge}
          description={description}
          subDescription={subDescription.length > 0 ? subDescription : highlights}
          image={image}
          tags={tags}
          href={href}
          github={github}
          liveDemo={liveDemo}
          closeModal={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Project;
