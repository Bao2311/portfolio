import { useState } from "react";
import { motion } from "motion/react";

function Navigation({ onItemClick }) {
  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <ul className="nav-ul items-center">
      {links.map((link) => (
        <li className="nav-li" key={link.name}>
          <a
            className="nav-link font-medium"
            href={link.href}
            onClick={onItemClick}
          >
            {link.name}
          </a>
        </li>
      ))}
      <li className="nav-li">
        <a
          href="/Le-Quoc-Bao-CV.pdf"
          download="Le-Quoc-Bao-CV.pdf"
          className="inline-flex items-center gap-2 px-4 py-1.5 text-sm font-semibold text-white bg-gradient-to-r from-royal to-lavender rounded-full shadow-md hover:opacity-90 transition-all hover:scale-105"
        >
          <span>📄 CV</span>
        </a>
      </li>
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full backdrop-blur-xl bg-primary/70 border-b border-white/5">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-3.5">
          <a
            href="#home"
            className="text-xl font-extrabold tracking-wider transition-colors text-white hover:text-lavender flex items-center gap-1"
          >
            BAO<span className="text-lavender">.DEV</span>
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex p-2 rounded-lg cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
            aria-label="Toggle navigation"
          >
            <img
              src={isOpen ? "/assets/close.svg" : "/assets/menu.svg"}
              className="w-6 h-6"
              alt="toggle menu"
            />
          </button>

          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>
      </div>

      {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden bg-primary/95 border-b border-white/10"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          <nav className="py-4">
            <Navigation onItemClick={() => setIsOpen(false)} />
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
