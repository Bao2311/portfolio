import { motion } from "motion/react";

const ProjectDetails = ({
  title,
  badge,
  description,
  subDescription = [],
  image,
  tags = [],
  href,
  github,
  liveDemo,
  closeModal,
}) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center w-full h-full p-4 overflow-y-auto backdrop-blur-md bg-black/70"
      onClick={closeModal}
    >
      <motion.div
        className="relative max-w-2xl w-full border shadow-2xl rounded-2xl bg-midnight border-white/10 overflow-hidden my-auto max-h-[90vh] flex flex-col"
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closeModal}
          className="absolute z-10 p-2.5 rounded-full top-4 right-4 bg-black/60 hover:bg-neutral-800 text-white transition-colors cursor-pointer border border-white/10"
          aria-label="Close modal"
        >
          <img src="assets/close.svg" className="w-5 h-5" alt="close" />
        </button>

        <div className="relative w-full aspect-video max-h-72 overflow-hidden shrink-0 bg-[#070a14] p-2 flex items-center justify-center">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-contain rounded-xl"
          />
          <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-midnight via-midnight/60 to-transparent pointer-events-none" />
          {badge && (
            <span className="absolute bottom-3 left-5 px-3 py-1 text-xs font-semibold rounded-full bg-royal/90 backdrop-blur-md text-white border border-white/20 shadow-md">
              {badge}
            </span>
          )}
        </div>

        <div className="p-6 overflow-y-auto flex-1">
          <h3 className="mb-2 text-2xl font-bold text-white">{title}</h3>
          <p className="mb-4 text-sm text-neutral-300 leading-relaxed">
            {description}
          </p>

          <div className="mb-5 space-y-2.5">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-lavender">
              Key Technical Implementations & Highlights:
            </h4>
            {subDescription.map((subDesc, index) => (
              <div key={index} className="flex items-start gap-2 text-sm text-neutral-400">
                <span className="text-emerald-400 font-bold shrink-0">✓</span>
                <p className="leading-relaxed">{subDesc}</p>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <div
                  key={tag.id}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-neutral-300"
                  title={tag.name}
                >
                  {tag.path && (
                    <img src={tag.path} alt={tag.name} className="w-4 h-4 object-contain" />
                  )}
                  <span>{tag.name}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
              {liveDemo && (
                <a
                  href={liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-royal to-lavender rounded-lg flex items-center gap-1.5 transition-all hover:scale-105 shadow-md"
                >
                  <span>🚀 Live Demo</span>
                </a>
              )}
              {(github || href) && (
                <a
                  href={github || href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-xs font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/15 rounded-lg flex items-center gap-1.5 transition-all hover:scale-105"
                >
                  <img src="/assets/logos/github.svg" className="w-4 h-4" alt="GitHub" />
                  <span>GitHub Repo</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
