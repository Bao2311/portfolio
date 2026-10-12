import Project from "../components/Project";
import { myProjects } from "../constants";
import { FloatingWorkstation } from "../components/FloatingWorkstation";

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative c-space section-spacing overflow-hidden"
    >
      {/* Background Subtle Nebula Glow for Projects Section */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-royal/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 -right-40 w-96 h-96 bg-aqua/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col items-center sm:items-start gap-2.5 mb-10 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 text-xs font-semibold tracking-wider uppercase rounded-full bg-lavender/10 text-lavender border border-lavender/25 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span>✦ MISSION CATALOG // FLAGSHIP PROJECTS ✦</span>
        </div>
        <h2 className="text-heading">My Galaxy of Work</h2>
        <p className="text-sm sm:text-base text-neutral-300 max-w-3xl leading-relaxed">
          Các dự án full-stack thực chiến tiêu biểu được xây dựng theo chuẩn Clean Architecture, cơ sở dữ liệu quan hệ tối ưu hóa cao và tích hợp dịch vụ thanh toán &amp; thời gian thực hiện đại.
        </p>
      </div>

      {/* 1. Flagship Projects Showcase Grid (2 Prominent Equal-Height Columns) */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-10 items-stretch mb-12">
        {myProjects.map((project) => (
          <Project key={project.id} {...project} />
        ))}
      </div>

      {/* 2. Interactive 3D Astronaut Workstation Command Deck */}
      <div className="relative rounded-3xl bg-gradient-to-r from-midnight/90 via-[#070b22]/90 to-storm/40 border border-white/10 hover:border-lavender/30 transition-all duration-300 backdrop-blur-xl p-6 sm:p-9 shadow-2xl overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-royal/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-aqua/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: 3D Interactive Rotating Desk */}
          <div className="lg:col-span-6 flex justify-center items-center w-full">
            <FloatingWorkstation />
          </div>

          {/* Right: Engineering Station Specs & Mission Values */}
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>ASTRONAUT WORKSTATION // TELEMETRY</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
              Môi Trường Làm Việc &amp; Chuẩn Mực Phát Triển Phần Mềm
            </h3>

            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              Tối ưu hóa quy trình lập trình với môi trường phát triển hiện đại, đa màn hình, tuân thủ nguyên lý thiết kế <strong className="text-white">Clean Architecture</strong>, <strong className="text-white">SOLID</strong> và phong cách lập trình chuẩn mực từ Java (Spring Boot) đến C# (.NET 9).
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <span className="block text-xs text-neutral-400 font-mono">IDE &amp; Tools</span>
                <span className="block text-sm font-semibold text-white mt-0.5">IntelliJ · VS Code</span>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <span className="block text-xs text-neutral-400 font-mono">DevOps &amp; DB</span>
                <span className="block text-sm font-semibold text-white mt-0.5">Docker · Postgres</span>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <span className="block text-xs text-neutral-400 font-mono">Ngoại Ngữ</span>
                <span className="block text-sm font-semibold text-emerald-400 mt-0.5">TOPIK 3 · English</span>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-1 text-xs text-neutral-400">
              <span className="text-lavender">💡</span>
              <span>Bạn có thể giữ chuột và kéo để xoay 360° bàn làm việc không gian phía bên.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
