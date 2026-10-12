import React from "react";

// Định nghĩa vị trí và delay của các sao chổi bay ngang
const SHOOTING_STARS = [
  { id: 1, top: "8%", right: "10%", delay: "0s", duration: "6.5s", width: "170px" },
  { id: 2, top: "24%", right: "5%", delay: "2.8s", duration: "7.2s", width: "200px" },
  { id: 3, top: "42%", right: "16%", delay: "5.5s", duration: "6.8s", width: "150px" },
  { id: 4, top: "60%", right: "8%", delay: "8.2s", duration: "7.5s", width: "180px" },
  { id: 5, top: "78%", right: "20%", delay: "10.8s", duration: "7.0s", width: "160px" },
  { id: 6, top: "92%", right: "12%", delay: "4.2s", duration: "8.0s", width: "190px" },
];

// Định nghĩa các ngôi sao lấp lánh (Twinkling diamond stars)
const TWINKLE_STARS = [
  { id: 1, top: "12%", left: "15%", size: 14, color: "#38bdf8", delay: "0s", duration: "3.2s" },
  { id: 2, top: "18%", left: "75%", size: 18, color: "#a78bfa", delay: "1.2s", duration: "4.5s" },
  { id: 3, top: "28%", left: "42%", size: 12, color: "#fef08a", delay: "2.1s", duration: "3.8s" },
  { id: 4, top: "38%", left: "88%", size: 16, color: "#67e8f9", delay: "0.7s", duration: "4.2s" },
  { id: 5, top: "48%", left: "8%", size: 15, color: "#c084fc", delay: "2.8s", duration: "3.5s" },
  { id: 6, top: "58%", left: "62%", size: 13, color: "#ffffff", delay: "1.6s", duration: "4.8s" },
  { id: 7, top: "72%", left: "22%", size: 17, color: "#38bdf8", delay: "0.4s", duration: "3.9s" },
  { id: 8, top: "82%", left: "82%", size: 14, color: "#e879f9", delay: "2.3s", duration: "4.1s" },
  { id: 9, top: "90%", left: "45%", size: 16, color: "#fde047", delay: "1.9s", duration: "4.6s" },
  { id: 10, top: "6%", left: "50%", size: 12, color: "#ffffff", delay: "3.1s", duration: "3.3s" },
  { id: 11, top: "64%", left: "34%", size: 13, color: "#a5b4fc", delay: "1.0s", duration: "4.0s" },
  { id: 12, top: "85%", left: "12%", size: 15, color: "#34d399", delay: "2.5s", duration: "3.7s" },
  { id: 13, top: "32%", left: "92%", size: 14, color: "#f472b6", delay: "1.8s", duration: "4.3s" },
  { id: 14, top: "52%", left: "28%", size: 16, color: "#38bdf8", delay: "0.9s", duration: "3.6s" },
  { id: 15, top: "76%", left: "68%", size: 13, color: "#fef08a", delay: "2.2s", duration: "4.4s" },
];

export const CosmicShootingStars = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden w-full h-full select-none">
      {/* 1. Shooting Stars / Sao chổi vệt sáng */}
      {SHOOTING_STARS.map((star) => (
        <div
          key={`shooting-${star.id}`}
          className="absolute"
          style={{
            top: star.top,
            right: star.right,
          }}
        >
          <div
            className="relative flex items-center"
            style={{
              animation: `shootingStar ${star.duration} ease-in-out infinite`,
              animationDelay: star.delay,
            }}
          >
            {/* Đầu sao chổi rực sáng dẫn đầu */}
            <div className="w-2 h-2 rounded-full bg-white shrink-0 shadow-[0_0_12px_#ffffff,0_0_24px_#38bdf8,0_0_36px_#a78bfa]" />
            {/* Đuôi sao chổi vệt sáng gradient mờ dần kéo dài về sau */}
            <div
              className="h-[2px] rounded-full bg-gradient-to-r from-white via-cyan-400/80 to-transparent"
              style={{
                width: star.width,
                boxShadow: "0 0 12px rgba(56, 189, 248, 0.7), 0 0 25px rgba(167, 139, 250, 0.4)",
              }}
            />
          </div>
        </div>
      ))}

      {/* 2. Twinkling Sparkle Stars / Ngôi sao lấp lánh hình 4 cánh ✦ */}
      {TWINKLE_STARS.map((star) => (
        <div
          key={`twinkle-${star.id}`}
          className="absolute flex items-center justify-center"
          style={{
            top: star.top,
            left: star.left,
            animation: `twinkle ${star.duration} ease-in-out infinite`,
            animationDelay: star.delay,
            color: star.color,
          }}
        >
          <svg
            width={star.size}
            height={star.size}
            viewBox="0 0 24 24"
            fill="currentColor"
            style={{
              filter: `drop-shadow(0 0 6px ${star.color})`,
            }}
          >
            <path d="M12 0L14.4 9.6L24 12L14.4 14.4L12 24L9.6 14.4L0 12L9.6 9.6L12 0Z" />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default CosmicShootingStars;
