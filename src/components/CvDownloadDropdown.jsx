import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";

const cvOptions = [
  {
    id: "vi",
    name: "Bản Tiếng Việt",
    subtitle: "Vietnamese CV (TopCV standard)",
    flag: "🇻🇳",
    badge: "VI",
    fileUrl: "/Le-Quoc-Bao-CV-VI.pdf",
    fileName: "Le-Quoc-Bao-CV-VI.pdf",
  },
  {
    id: "en",
    name: "English Version",
    subtitle: "English CV (TopCV standard)",
    flag: "🇬🇧",
    badge: "EN",
    fileUrl: "/Le-Quoc-Bao-CV-EN.pdf",
    fileName: "Le-Quoc-Bao-CV-EN.pdf",
  },
];

const CvDownloadDropdown = ({
  triggerClassName = "",
  containerClassName = "inline-block",
  label = "CV",
  icon = "📄",
  position = "bottom-center", // 'bottom-center' | 'bottom-left' | 'bottom-right' | 'top-center' | 'top-left' | 'top-right'
  onOptionClick,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  // Position alignment styling
  const getPositionClasses = () => {
    switch (position) {
      case "bottom-right":
        return "right-0 top-full mt-2";
      case "bottom-left":
        return "left-0 top-full mt-2";
      case "top-center":
        return "bottom-full left-1/2 -translate-x-1/2 mb-2";
      case "top-left":
        return "bottom-full left-0 mb-2";
      case "top-right":
        return "bottom-full right-0 mb-2";
      case "bottom-center":
      default:
        return "left-1/2 -translate-x-1/2 top-full mt-2";
    }
  };

  return (
    <div className={`relative ${containerClassName} text-left`} ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className={`${triggerClassName} inline-flex items-center justify-center gap-2 cursor-pointer select-none`}
        aria-expanded={isOpen}
        aria-haspopup="true"
        title="Chọn bản CV để tải (Tiếng Việt / English)"
      >
        {icon && <span>{icon}</span>}
        <span>{label}</span>
        <svg
          className={`w-3.5 h-3.5 transition-transform duration-200 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Animated Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: position.startsWith("top") ? 6 : -6 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: position.startsWith("top") ? 6 : -6 }}
            transition={{ duration: 0.16, ease: "easeOut" }}
            className={`absolute z-50 w-64 sm:w-72 p-2 rounded-2xl bg-midnight/95 backdrop-blur-2xl border border-white/15 shadow-2xl shadow-black/60 ${getPositionClasses()}`}
          >
            {/* Dropdown Header */}
            <div className="px-3 py-2 border-b border-white/10 mb-1">
              <p className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider flex items-center justify-between">
                <span>Chọn ngôn ngữ CV</span>
                <span className="text-cyan-400 font-mono text-[10px]">PDF format</span>
              </p>
            </div>

            {/* Language Options */}
            <div className="space-y-1">
              {cvOptions.map((opt) => (
                <a
                  key={opt.id}
                  href={opt.fileUrl}
                  download={opt.fileName}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    setIsOpen(false);
                    if (onOptionClick) onOptionClick(opt);
                  }}
                  className="group flex items-center justify-between p-2.5 rounded-xl hover:bg-white/10 transition-all border border-transparent hover:border-white/10 text-left"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl select-none">{opt.flag}</span>
                    <div>
                      <p className="text-sm font-semibold text-white group-hover:text-lavender transition-colors flex items-center gap-1.5">
                        {opt.name}
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/10 text-neutral-300 font-mono">
                          {opt.badge}
                        </span>
                      </p>
                      <p className="text-[11px] text-neutral-400 group-hover:text-neutral-300 transition-colors">
                        {opt.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="w-8 h-8 rounded-lg bg-white/5 group-hover:bg-royal/40 flex items-center justify-center transition-colors">
                    <svg
                      className="w-4 h-4 text-neutral-300 group-hover:text-white group-hover:translate-y-0.5 transition-all"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                  </div>
                </a>
              ))}
            </div>

            {/* Quick Preview Hint */}
            <div className="mt-1 pt-1.5 border-t border-white/5 px-2 text-center">
              <span className="text-[10px] text-neutral-500">
                Click để tải về hoặc mở tab mới
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CvDownloadDropdown;
