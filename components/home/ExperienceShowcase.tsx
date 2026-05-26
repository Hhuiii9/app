"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  ArrowUpRight, 
  ShieldCheck, 
  Waves, 
  Camera, 
  LifeBuoy, 
  Anchor, 
  BadgeCheck 
} from "lucide-react";

// Normalized schema matching your JSX architecture
const showcaseItems = [
  {
    id: "course-1",
    type: "image",
    tag: "Fundamentals",
    icon: Waves,
    title: "Beginner Diving",
    desc: "Learn scuba diving fundamentals with safety-focused training.",
    src: "/images/course-1.jpg",
  },
  {
    id: "course-2",
    type: "image",
    tag: "Advanced",
    icon: ShieldCheck,
    title: "Advanced Diving",
    desc: "Advanced underwater techniques and deep diving sessions.",
    src: "/images/course-2.jpg",
  },
  {
    id: "course-3",
    type: "images", 
    tag: "Creative",
    icon: Camera,
    title: "Underwater Photography",
    desc: "Capture underwater moments using professional techniques.",
    src: "/images/course-3.jpg", 
  },
  {
    id: "course-4",
    type: "image",
    tag: "Safety",
    icon: LifeBuoy,
    title: "Rescue Diving",
    desc: "Emergency response and underwater rescue training programs.",
    src: "/images/course-4.jpg",
  },
  {
    id: "course-5",
    type: "image",
    tag: "Career",
    icon: Anchor,
    title: "Commercial Diving",
    desc: "Career-focused industrial and offshore diving training.",
    src: "/images/course-5.jpg",
  },
  {
    id: "course-6",
    type: "image",
    tag: "Industrial",
    icon: BadgeCheck,
    title: "Marine Inspection",
    desc: "Professional underwater inspection and marine operations.",
    src: "/images/course-6.jpg",
  },
];

export default function ExperienceShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const track = trackRef.current;
    const container = containerRef.current;
    if (!track || !container) return;

    const getScrollAmount = () => {
      return -(track.scrollWidth - window.innerWidth);
    };

    const pin = gsap.to(track, {
      x: getScrollAmount,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: () => `+=${track.scrollWidth - window.innerWidth}`,
        pin: true,
        scrub: 1.2,
        invalidateOnRefresh: true,
      },
    });

    // Inner card image parallax synced specifically to the horizontal pin timeline
    const cards = track.querySelectorAll(".showcase-card-media");
    cards.forEach((card) => {
      gsap.fromTo(
        card,
        { x: "-10%" },
        {
          x: "10%",
          ease: "none",
          scrollTrigger: {
            trigger: card,
            containerAnimation: pin, // Crucial sync with horizontal motion!
            start: "left right",
            end: "right left",
            scrub: true,
          },
        }
      );
    });

    return () => {
      pin.scrollTrigger?.kill();
      pin.kill();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-[#03131d]"
    >
      {/* SECTION LABEL (Floating Top-Left) */}
      <div className="absolute left-6 sm:left-12 top-10 sm:top-14 z-20 flex flex-col gap-2">
        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-400">
          Experience Showcase
        </span>
        <h2 className="text-xl sm:text-3xl font-black uppercase tracking-wider text-white">
          Under the Surface
        </h2>
      </div>

      {/* HORIZONTAL TRACK SCROLLER */}
      <div
        ref={trackRef}
        className="flex h-full items-center pl-6 pr-[20vw] sm:pl-12 gap-8 sm:gap-12 flex-nowrap"
      >
        {showcaseItems.map((item) => {
          // Destructure the icon property to a capitalized element variable
          const IconComponent = item.icon;

          return (
            <div
              key={item.id}
              className="group relative flex-none w-[80vw] sm:w-[500px] h-[60vh] rounded-[2.5rem] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md cursor-pointer select-none shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-500 hover:border-cyan-500/30"
            >
              {/* The Media Box (Glides left/right inside the container) */}
              <div className="absolute inset-0 w-[120%] h-full left-0 showcase-card-media pointer-events-none select-none">
                {item.type === "video" ? (
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    className="w-full h-full object-cover brightness-[0.5] contrast-[1.1] saturate-[1.2]"
                  >
                    <source src={item.src} type="video/mp4" />
                  </video>
                ) : (
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(max-w-7xl) 40vw, 80vw"
                    className="object-cover brightness-[0.5] contrast-[1.1]"
                  />
                )}
                {/* Inner card shadow gradients */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#03131d]/90 via-transparent to-[#03131d]/30" />
              </div>

              {/* METADATA OVERLAYS */}
              <div className="relative z-10 p-8 sm:p-10 flex flex-col h-full justify-between">
                
                {/* Card Header tag */}
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/10 px-3 py-1.5 rounded-full text-cyan-300">
                    {/* Rendered Dynamic Icon */}
                    <IconComponent className="h-3.5 w-3.5" />
                    <span className="text-[9px] font-black uppercase tracking-[0.2em]">
                      {item.tag}
                    </span>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/20 text-white backdrop-blur-md transition-all duration-300 group-hover:bg-cyan-400 group-hover:text-slate-950 group-hover:border-transparent group-hover:rotate-45">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>

                {/* Card Footer details */}
                <div className="max-w-[360px] flex flex-col gap-2">
                  <h3 className="text-2xl font-black uppercase tracking-wide text-white leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-light text-slate-300 leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}