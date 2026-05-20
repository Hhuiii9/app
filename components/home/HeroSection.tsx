// src/components/home/HeroSection.tsx

"use client";

import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Waves,
  Anchor,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Certified Training",
  },
  {
    icon: Waves,
    title: "Professional Diving",
  },
  {
    icon: Anchor,
    title: "Marine Services",
  },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#03131d] text-white">
      {/* VIDEO */}
      <video
  autoPlay
  muted
  loop
  playsInline
  preload="auto"
  controls={false}
  disablePictureInPicture
  poster="/images/ocean-poster.jpg" // ഇവിടെ ഒരു നല്ല ബാക്ക്ഗ്രൗണ്ട് ഫോട്ടോയുടെ പാത്ത് കൊടുക്കുക
  className="absolute inset-0 h-full w-full object-cover"
>
  <source src="/videos/ocean-bg.mp4" type="video/mp4" />
</video>

      {/* OVERLAYS */}
      <div className="absolute inset-0 z-[1] bg-[#041520]/80" />

      <div className="absolute inset-0 z-[2] bg-gradient-to-b from-[#02131d]/70 via-cyan-950/30 to-[#02131d]/90" />

      {/* CONTENT */}
      <div className="relative z-10 flex min-h-[92vh] items-center justify-center px-4 pb-14 pt-28 sm:min-h-screen sm:px-6 sm:pb-24 sm:pt-32 md:pt-36">
        <div className="mx-auto flex w-full max-w-4xl flex-col items-center text-center">
          
          {/* TAG */}
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-white/10 px-3 py-1.5 backdrop-blur-md sm:px-4 sm:py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 sm:h-2 sm:w-2" />

            <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-cyan-200 sm:text-xs">
              Dive Hub & Marine Services
            </p>
          </div>

          {/* TITLE */}
          <h1 className="mt-5 text-[30px] font-black leading-[1.02] tracking-tight sm:mt-6 sm:text-5xl md:text-7xl">
            Professional
            <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-cyan-500 bg-clip-text text-transparent">
              {" "}
              Diving
            </span>
            <br />
            & Marine Solutions
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-4 max-w-xl text-[13px] leading-6 text-slate-200 sm:mt-5 sm:max-w-2xl sm:text-[16px] sm:leading-8">
            Professional scuba diving training,
            marine support services, underwater
            experiences, commercial diving
            programs, and advanced specialty
            training.
          </p>

          {/* BUTTONS */}
          <div className="mt-6 flex w-full max-w-[310px] flex-col gap-2.5 sm:mt-8 sm:max-w-none sm:w-auto sm:flex-row sm:gap-3">
            <Link
              href="/courses"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-5 py-3 text-[10px] font-black uppercase tracking-[0.16em] text-slate-950 transition-all duration-300 hover:scale-105 hover:bg-cyan-300 sm:px-7 sm:py-4 sm:text-xs"
            >
              Explore Courses

              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/10 px-5 py-3 text-[10px] font-black uppercase tracking-[0.16em] text-white backdrop-blur-md transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-500/10 sm:px-7 sm:py-4 sm:text-xs"
            >
              Contact Us
            </Link>
          </div>

          {/* FEATURES */}
          {/* OPTIONAL SECTION */}
          {/* REMOVE THIS WHOLE BLOCK IF NOT NEEDED */}

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:mt-8 sm:gap-3">
            {features.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="
                    inline-flex
                    items-center
                    gap-1.5
                    rounded-full
                    border
                    border-white/10
                    bg-white/10
                    px-3
                    py-1.5
                    backdrop-blur-md
                    transition-all
                    duration-300
                    hover:bg-cyan-500/10
                  "
                >
                  <Icon className="h-3 w-3 text-cyan-300" />

                  <span className="text-[8px] font-bold uppercase tracking-wide text-slate-100 sm:text-[10px]">
                    {item.title}
                  </span>
                </div>
              );
            })}
          </div>

          {/* SPACING */}
          <div className="h-10 sm:h-16" />
        </div>
      </div>
    </section>
  );
}