import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
  const outerSkills = [
    "java",
    "springboot",
    "csharp",
    "dotnetcore",
    "react",
    "postgresql",
    "docker",
    "microsoftsqlserver",
  ];

  const innerSkills = [
    "tailwindcss",
    "vitejs",
    "git",
    "github",
    "javascript",
    "html5",
    "css3",
  ];

  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center scale-[0.82] sm:scale-95 md:scale-100 transition-transform">
      <OrbitingCircles iconSize={38} radius={140} speed={1.2}>
        {outerSkills.map((skill, index) => (
          <Icon key={index} src={`/assets/logos/${skill}.svg`} alt={skill} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={28} radius={85} reverse speed={1.8}>
        {innerSkills.map((skill, index) => (
          <Icon key={index} src={`/assets/logos/${skill}.svg`} alt={skill} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src, alt }) => (
  <div className="flex items-center justify-center p-1.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-md transition-transform duration-200 hover:scale-125">
    <img src={src} alt={alt} className="w-full h-full object-contain" />
  </div>
);
