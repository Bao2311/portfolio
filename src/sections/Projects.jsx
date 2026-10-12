import Project from "../components/Project";
import { myProjects } from "../constants";
import { FloatingWorkstation } from "../components/FloatingWorkstation";

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative c-space section-spacing"
    >
      <div className="flex flex-col items-start gap-2 mb-6">
        <p className="text-sm font-semibold tracking-wider uppercase text-lavender">// FEATURED PROJECTS</p>
        <h2 className="text-heading">My Galaxy of Work</h2>
        <p className="text-sm text-neutral-400 max-w-2xl">
          Các dự án full-stack thực chiến tiêu biểu được xây dựng với kiến trúc chuẩn, cơ sở dữ liệu tối ưu và tích hợp dịch vụ hiện đại.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Project Items */}
        <div className="lg:col-span-7 flex flex-col">
          <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mb-2 h-[1px] w-full" />
          {myProjects.map((project) => (
            <Project key={project.id} {...project} />
          ))}
        </div>

        {/* Right Column: Floating 3D Developer Workstation Orbiting in Space */}
        <div className="lg:col-span-5 flex justify-center items-center w-full">
          <FloatingWorkstation />
        </div>
      </div>
    </section>
  );
};

export default Projects;
