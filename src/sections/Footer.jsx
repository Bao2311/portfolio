import { mySocials } from "../constants";

const Footer = () => {
  return (
    <footer className="w-full mt-20 pb-8 text-sm text-neutral-400 border-t border-white/5 bg-[#030412]">
      <div className="max-w-7xl mx-auto c-space pt-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <p className="text-white font-medium">
              Designed &amp; Built by <strong className="text-lavender">Lê Quốc Bảo</strong> · Full-stack Developer
            </p>
            <p className="text-xs text-neutral-500 mt-1">
              Java · .NET · React · FPT University 2026 · 📍 Ho Chi Minh City, Vietnam
            </p>
          </div>

          <div className="flex items-center gap-4">
            {mySocials.map((social, index) => (
              <a
                href={social.href}
                key={index}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-300 hover:text-white transition-all hover:scale-110"
                title={social.name}
              >
                <img src={social.icon} className="w-4 h-4 object-contain" alt={social.name} />
              </a>
            ))}
          </div>

          <p className="text-xs text-neutral-500">
            © {new Date().getFullYear()} Lê Quốc Bảo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
