"use client";
import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="c-space section-spacing" ref={containerRef} id="experience">
      <div className="flex flex-col items-start gap-2 mb-4">
        <p className="text-sm font-semibold tracking-wider uppercase text-lavender">// WORK EXPERIENCE</p>
        <h2 className="text-heading">My Journey & Career Path</h2>
        <p className="text-sm text-neutral-400">
          Hành trình phát triển kỹ năng thực chiến từ môi trường doanh nghiệp FPT Software đến nền tảng đào tạo kỹ sư phần mềm.
        </p>
      </div>

      <div ref={ref} className="relative pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-28 md:gap-10"
          >
            <div className="sticky z-40 flex flex-col items-start self-start max-w-xs md:flex-row top-32 lg:max-w-sm md:w-full">
              <div className="absolute flex items-center justify-center w-10 h-10 rounded-full -left-[15px] bg-midnight border border-lavender/40 shadow-lg shadow-lavender/20">
                <div className="w-3.5 h-3.5 rounded-full bg-gradient-to-r from-royal to-lavender" />
              </div>

              <div className="flex-col hidden gap-1 md:flex md:pl-20 text-neutral-300">
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-lavender/10 text-lavender border border-lavender/20 w-fit">
                  {item.date}
                </span>
                <h3 className="text-2xl font-bold text-white mt-2">{item.title}</h3>
                <h4 className="text-lg font-medium text-neutral-400">{item.job}</h4>
              </div>
            </div>

            <div className="relative w-full pl-12 pr-4 md:pl-4">
              <div className="block mb-4 md:hidden">
                <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-lavender/10 text-lavender border border-lavender/20">
                  {item.date}
                </span>
                <h3 className="text-xl font-bold text-white mt-2">{item.title}</h3>
                <h4 className="text-sm font-medium text-neutral-400 mb-2">{item.job}</h4>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm space-y-2.5">
                {item.contents.map((content, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm md:text-base text-neutral-300 leading-relaxed">
                    <span className="text-lavender font-bold shrink-0 mt-0.5">✦</span>
                    {content.startsWith("🏆") || content.startsWith("🎖️") ? (
                      <p className="font-semibold text-amber-300 bg-amber-500/15 px-3 py-1.5 rounded-lg border border-amber-500/30 w-fit text-sm md:text-base">
                        {content}
                      </p>
                    ) : content.includes("TOPIK 3") ? (
                      <p>
                        {content}{" "}
                        <a
                          href="/topik-3-certificate.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs text-lavender hover:text-white underline underline-offset-4 ml-1.5 font-medium transition-colors"
                          title="Xem chứng chỉ TOPIK 3 (PDF)"
                        >
                          [Xem chứng chỉ PDF ↗]
                        </a>
                      </p>
                    ) : (
                      <p>{content}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}

        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-1 left-1 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-lavender to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
