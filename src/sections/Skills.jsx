import { mySkills } from "../constants";

const Skills = () => {
  return (
    <section className="c-space section-spacing" id="skills">
      <div className="flex flex-col items-start gap-2 mb-10">
        <p className="text-sm font-semibold tracking-wider uppercase text-lavender">
          // SKILLS & TECHNOLOGIES
        </p>
        <h2 className="text-heading">My Technical Arsenal</h2>
        <p className="text-sm text-neutral-400">
          Các công nghệ, framework và công cụ cốt lõi được tôi ứng dụng thành thạo vào dự án thực tế.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {mySkills.map((cat, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl bg-gradient-to-b from-storm/40 to-indigo/40 border border-white/10 hover:border-lavender/40 transition-all duration-300 hover:-translate-y-1.5 shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-lavender animate-pulse" />
                <h3 className="text-lg font-bold text-white tracking-wide">
                  {cat.category}
                </h3>
              </div>

              <div className="space-y-4">
                {cat.items.map((item, itemIdx) => (
                  <div key={itemIdx}>
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="font-medium text-neutral-300">
                        {item.name}
                      </span>
                      <span className="text-lavender font-semibold">
                        {item.level}
                      </span>
                    </div>
                    {item.level.includes("%") ? (
                      <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-royal to-aqua transition-all duration-1000"
                          style={{ width: item.level }}
                        />
                      </div>
                    ) : (
                      <div className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-xs border border-emerald-500/20 w-fit">
                        {item.level}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Language & Certificate Banner */}
      <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-royal/30 via-lavender/20 to-storm/30 border border-lavender/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 shadow-xl hover:border-lavender/50 transition-all">
        <div className="flex items-center gap-4 text-left">
          <div className="text-4xl p-3.5 rounded-2xl bg-white/10 border border-white/15 shadow-inner shrink-0">
            🇰🇷
          </div>
          <div>
            <div className="flex items-center gap-2.5 flex-wrap">
              <h4 className="text-lg font-bold text-white">
                Chứng chỉ Tiếng Hàn TOPIK 3 (한국어능력시험)
              </h4>
              <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                TOPIK II · 3급 (144/300)
              </span>
            </div>
            <p className="text-xs text-neutral-300 mt-1">
              FPT University — Hướng Kỹ sư cầu nối Hàn Quốc · Kỳ thi 106 (05/2026) · Khả năng đọc hiểu tài liệu, giao tiếp và làm việc với đối tác quốc tế.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 shrink-0 w-full md:w-auto justify-end">
          <a
            href="/topik-3-certificate.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-royal to-lavender hover:from-royal/90 hover:to-lavender/90 text-white text-xs sm:text-sm font-semibold shadow-lg shadow-lavender/30 transition-all hover:scale-105 border border-white/20 group cursor-pointer"
            title="Xem bản gốc Chứng chỉ TOPIK 3 (PDF)"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
            </svg>
            <span>Xem Chứng Chỉ (PDF)</span>
            <span className="text-xs group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Skills;
