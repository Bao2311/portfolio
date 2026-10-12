import React, { useState } from "react";
import ProjectDetails from "./ProjectDetails";

const Project = ({
  title,
  badge,
  description,
  subDescription,
  href,
  github,
  liveDemo,
  image,
  tags,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="flex flex-col sm:flex-row items-start sm:items-center justify-between py-6 gap-6 group transition-all rounded-2xl p-3 sm:p-4 hover:bg-white/[0.02]"
      >
        <div className="flex items-start sm:items-center gap-5 flex-1 w-full">
          {image && (
            <div
              onClick={() => setIsOpen(true)}
              className="hidden md:flex flex-col w-48 lg:w-56 aspect-[16/10] rounded-xl overflow-hidden border border-white/10 shrink-0 group-hover:border-lavender/60 transition-all shadow-xl bg-[#070a14] p-1.5 cursor-pointer relative group/thumb"
              title="Click to view details"
            >
              <div className="w-full h-full rounded-lg overflow-hidden relative flex items-center justify-center bg-black/40">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-contain rounded-lg group-hover/thumb:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          )}
          <div className="flex-1">
          <div className="flex items-center gap-3 mb-2 flex-wrap">
            <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-lavender transition-colors">
              {title}
            </h3>
            {badge && (
              <span className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-lavender/10 text-lavender border border-lavender/20">
                {badge}
              </span>
            )}
            {liveDemo && (
              <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Live Demo
              </span>
            )}
          </div>

          <p className="text-sm md:text-base text-neutral-400 max-w-3xl mb-3 line-clamp-2">
            {description}
          </p>

          <div className="flex flex-wrap gap-2 text-xs text-sand">
            {tags.map((tag) => (
              <span
                key={tag.id}
                className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-neutral-300"
              >
                {tag.name}
              </span>
            ))}
          </div>
        </div>
      </div>

        <div className="flex items-center gap-3 self-end sm:self-center shrink-0">
          {liveDemo && (
            <a
              href={liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 text-xs font-semibold text-white bg-royal/80 hover:bg-royal rounded-lg flex items-center gap-1.5 transition-all hover:scale-105"
              onClick={(e) => e.stopPropagation()}
            >
              <span>🚀 Live Demo</span>
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-neutral-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all"
              title="GitHub Source"
              onClick={(e) => e.stopPropagation()}
            >
              <img src="/assets/logos/github.svg" className="w-4 h-4" alt="GitHub" />
            </a>
          )}
          <button
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-neutral-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all hover:scale-105 cursor-pointer"
          >
            Details
            <img src="assets/arrow-right.svg" className="w-3.5 h-3.5" alt="arrow" />
          </button>
        </div>
      </div>

      <div className="bg-gradient-to-r from-transparent via-neutral-800 to-transparent h-[1px] w-full" />

      {isOpen && (
        <ProjectDetails
          title={title}
          badge={badge}
          description={description}
          subDescription={subDescription}
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
